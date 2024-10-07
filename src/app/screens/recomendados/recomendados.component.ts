import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recomendados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recomendados.component.html',
  styleUrl: './recomendados.component.css'
})
export class RecomendadosComponent {
  librosRecomendados = [
    { titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez' },
    { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes' },
    { titulo: '1984', autor: 'George Orwell' },
    { titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry' },
    { titulo: 'Orgullo y Prejuicio', autor: 'Jane Austen' },
    { titulo: 'Matar a un Ruiseñor', autor: 'Harper Lee' },
    { titulo: 'El Gran Gatsby', autor: 'F. Scott Fitzgerald' },
    { titulo: 'Crimen y Castigo', autor: 'Fyodor Dostoevsky' },
    { titulo: 'La Odisea', autor: 'Homero' },
    { titulo: 'Ulises', autor: 'James Joyce' }
  ];
}
