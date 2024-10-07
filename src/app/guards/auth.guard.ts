import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FormularioLoginComponent } from '../components/formulario-login/formulario-login.component';

export const authGuard: CanActivateFn = (route, state) => {
  const acceso: boolean = FormularioLoginComponent.logeado;
  const router = inject(Router);

  if (acceso === true) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
