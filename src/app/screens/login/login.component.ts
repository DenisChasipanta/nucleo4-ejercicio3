import { Component } from '@angular/core';
import { FormularioLoginComponent } from "../../components/formulario-login/formulario-login.component";
import { FormularioRegistroComponent } from "../../components/formulario-registro/formulario-registro.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormularioLoginComponent, FormularioRegistroComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
