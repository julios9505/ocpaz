import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../models/libro';
import { LibrosComponent } from '../components/libros/libros.component';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  selectedLibro: Libro;
  libro: Libro[];
  //Local
  //  readonly URL_LIB = 'http://localhost:3200/api/libros';

  //Heroku
  readonly URL_LIB = '/api/libros';

  constructor(private http: HttpClient) { 
    this.selectedLibro = new Libro();

  }

  getLibros(){
    return this.http.get(this.URL_LIB);
     
  }

  postLibro(Libro: Libro){
    return this.http.post(this.URL_LIB, Libro);

  }

  putLibro(libro: Libro){
    return this.http.put(this.URL_LIB + `/${libro._id}`, libro);

  }

  deleteLibro(_id: string){
    return this.http.delete(this.URL_LIB + `/${_id}`);


  }

}
