import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gestion-libros',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './gestion-libros.component.html',
  styleUrls: ['./gestion-libros.component.css']
})
export class GestionLibrosComponent implements OnInit {
  libros: any[] = [];
  nuevoLibro = { autor: '', libro: '', anio: '', imagen: '' };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadLibros();
  }

  loadLibros() {
    this.http.get<any[]>('http://localhost:3000/libros').subscribe(data => {
      this.libros = data;
    });
  }

  addLibro() {
    this.http.post('http://localhost:3000/libros', this.nuevoLibro).subscribe(() => {
      this.loadLibros();
      this.nuevoLibro = { autor: '', libro: '', anio: '', imagen: '' }; 
    });
  }

  deleteLibro(libroId: number) {
    this.http.delete(`http://localhost:3000/libros/${libroId}`).subscribe(() => {
      this.loadLibros();
    });
  }
}
