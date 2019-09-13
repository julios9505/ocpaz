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
  // readonly URL_LECT = 'http://localhost:3200/api/lecturas';
  //heroku
  readonly URL_LECT = 'api/lecturas';

  constructor(public http: HttpClient) {
    this.selectedLectura = new Lectura();
  }

  postLectura(lectura: Lectura) {
    return this.http.post(this.URL_LECT, lectura);
  }

  getLecturas() {
    return this.http.get(this.URL_LECT);
  }

  getLecturas2(_id: string) {
    return this.http.get(this.URL_LECT + `/${_id}`);
  }

  putLectura(lectura: Lectura) {
    return this.http.put(this.URL_LECT + `/${lectura._id}`, lectura);
  }

  deleteLectura(_id: string) {
    return this.http.delete(this.URL_LECT + `/${_id}`);
  }
}
