import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private libros = [
    { "autor": "Gabriel García Márquez", "libro": "Cien Años de Soledad", "anio": 1967, "imagen": "https://www.google.com/imgres?q=Cien%20A%C3%B1os%20de%20Soledad&imgurl=https%3A%2F%2Fwww.rae.es%2Fsites%2Fdefault%2Ffiles%2Fportada_cien_anos_de_soledad_0.jpg&imgrefurl=https%3A%2F%2Fwww.rae.es%2Fobras-academicas%2Fediciones-conmemorativas%2Fcien-anos-de-soledad&docid=lpiLxp0Q2ZFY3M&tbnid=QECmPxJV2bEsmM&vet=12ahUKEwiP5tjFufuIAxWYSTABHWglGcsQM3oECBkQAA..i&w=1360&h=2405&hcb=2&ved=2ahUKEwiP5tjFufuIAxWYSTABHWglGcsQM3oECBkQAA" },
  { "autor": "J.K. Rowling", "libro": "Harry Potter y la piedra filosofal", "anio": 1997, "imagen": "https://example.com/harry-potter1.jpg" },
  { "autor": "George Orwell", "libro": "1984", "anio": 1949, "imagen": "https://example.com/1984.jpg" },
  { "autor": "F. Scott Fitzgerald", "libro": "El Gran Gatsby", "anio": 1925, "imagen": "https://example.com/gran-gatsby.jpg" },
  { "autor": "Harper Lee", "libro": "Matar a un ruiseñor", "anio": 1960, "imagen": "https://example.com/matar-a-un-ruisenor.jpg" },
  { "autor": "Jane Austen", "libro": "Orgullo y prejuicio", "anio": 1813, "imagen": "https://example.com/orgullo-y-prejuicio.jpg" },
  { "autor": "Herman Melville", "libro": "Moby Dick", "anio": 1851, "imagen": "https://example.com/moby-dick.jpg" },
  { "autor": "J.R.R. Tolkien", "libro": "El Hobbit", "anio": 1937, "imagen": "https://example.com/el-hobbit.jpg" },
  { "autor": "Mark Twain", "libro": "Las aventuras de Tom Sawyer", "anio": 1876, "imagen": "https://example.com/tom-sawyer.jpg" },
  { "autor": "Gabriel García Márquez", "libro": "El amor en los tiempos del cólera", "anio": 1985, "imagen": "https://example.com/el-amor-en-los-tiempos-del-colera.jpg" }
    
  ];

  getLibros() {
    return this.libros;
  }
}
