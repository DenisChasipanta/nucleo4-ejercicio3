import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit {
  libros: any[] = [];

  constructor(private libroService: LibroService) {}

  ngOnInit() {
    this.libros = this.libroService.getLibros();
  }
}
