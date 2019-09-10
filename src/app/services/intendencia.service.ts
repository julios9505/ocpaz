import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Intendencia } from '../models/intendencia';
import { IntendenciasComponent } from '../components/intendencias/intendencias.component';

@Injectable({
  providedIn: 'root'
})
export class IntendenciaService {

  selectedIntendencia: Intendencia;
  intendencia: Intendencia[];
//local
//  readonly URL_API = 'http://localhost:3200/api/intendencias';


//heroku
  readonly URL_INT = '/api/intendencias';

  constructor(private http: HttpClient) { 
    this.selectedIntendencia = new Intendencia();

  }

  getIntendencias(){
    return this.http.get(this.URL_INT);
     
  }

  postIntendencia(Intendencia: Intendencia){
    return this.http.post(this.URL_INT, Intendencia);

  }

  putIntendencia(intendencia: Intendencia){
    return this.http.put(this.URL_INT + `/${intendencia._id}`, intendencia);

  }

  deleteIntendencia(_id: string){
    return this.http.delete(this.URL_INT + `/${_id}`);


  }

}
