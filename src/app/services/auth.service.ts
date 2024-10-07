import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError } from 'rxjs';
import { of } from 'rxjs';

interface User {
  username: string;
  password: string;
  role?: string; 
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus = false;
  private userRole: string = 'invitado';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios', user).pipe(
      catchError(error => {
        console.error('Error al registrar usuario', error);
        return of(null); // Devuelve null en caso de error
      })
    );
  }

  login(credentials: { username: string; password: string }): Observable<boolean> {
    return this.http.get<User[]>(`http://localhost:3000/usuarios?username=${credentials.username}&password=${credentials.password}`).pipe(
      map(users => {
        if (users.length > 0) {
          this.isLoggedInStatus = true;
          this.userRole = users[0].role ?? 'invitado'; // Asigna 'invitado' como valor por defecto
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => {
        console.error('Error al iniciar sesión', error);
        return of(false); // Devuelve false en caso de error
      })
    );
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }

  isAdmin(): boolean {
    return this.userRole === 'admin';
  }
}
