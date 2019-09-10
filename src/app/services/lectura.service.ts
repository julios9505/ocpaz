import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lectura } from '../models/lectura';

@Injectable({
  providedIn: 'root'
})
export class LecturaService {

  selectedLectura: Lectura;
  lecturas: Lectura[];
  //LOCAL
  //readonly URL_API = 'http://localhost:3200/api/lecturas';
  //heroku
  readonly URL_LECT = 'api/lecturas';

  constructor(private http: HttpClient) {
    this.selectedLectura = new Lectura();
  }

  postLectura(lectura: Lectura) {
    return this.http.post(this.URL_LECT, lectura);
  }

  getLecturas() {
    return this.http.get(this.URL_LECT);
  }

  putLectura(lectura: Lectura) {
    return this.http.put(this.URL_LECT + `/${lectura._id}`, lectura);
  }

  deleteLectura(_id: string) {
    return this.http.delete(this.URL_LECT + `/${_id}`);
  }
}
