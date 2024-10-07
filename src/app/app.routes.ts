import { Routes } from '@angular/router';
import { GestionLibrosComponent } from './screens/gestion-libros/gestion-libros.component';
import { LibrosComponent } from './screens/libros/libros.component';
import { LoginComponent } from './screens/login/login.component';
import { RecomendadosComponent } from './screens/recomendados/recomendados.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './screens/home/home.component';
import { RegisterComponent } from './screens/register/register.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "libros", component: LibrosComponent },
    { path: "recomendados", component: RecomendadosComponent },
    { path: "gestionlibros", component: GestionLibrosComponent, canActivate: [authGuard] },
    { path: "login", component: LoginComponent },
    { path: "registro", component: RegisterComponent}
];
