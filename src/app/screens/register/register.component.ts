import { Component } from '@angular/core';
import { FormularioRegistroComponent } from "../../components/formulario-registro/formulario-registro.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormularioRegistroComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
