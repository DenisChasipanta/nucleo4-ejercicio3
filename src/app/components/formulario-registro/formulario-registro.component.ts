import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {
  constructor(private http: HttpClient) {}

  register(username: string, password: string) {
    const usuario = { username, password };

    this.http.post('http://localhost:3000/usuarios', usuario).subscribe(response => {
      console.log('Usuario registrado:', response);
      // Aquí puedes agregar lógica para mostrar un mensaje de éxito
    }, error => {
      console.error('Error al registrar el usuario:', error);
      // Aquí puedes agregar lógica para mostrar un mensaje de error
    });
  }
}
