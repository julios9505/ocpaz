import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mobiliario } from '../models/mobiliario';
@Injectable({
  providedIn: 'root'
})
export class MobiliarioService {

  selectedMobiliario : Mobiliario;
  mobiliarios:Mobiliario[];
  //LOCAL
  // readonly URL_API = 'http://localhost:3200/api/mobiliarios'


  //HEROKU
  readonly URL_MOB = '/api/mobiliarios'
  constructor(private http: HttpClient) { 
    this.selectedMobiliario = new Mobiliario();
  }

  getMobiliarios (){
    return this.http.get(this.URL_MOB);
  }

  postMobiliarios(Mobiliario: Mobiliario){
    return this.http.post(this.URL_MOB, Mobiliario);
  }

  putMobiliario(Mobiliario :Mobiliario){
    return this.http.put(this.URL_MOB + `/${Mobiliario._id}`, Mobiliario )
  }

  deleteMobiliario(_id:String){
    return this.http.delete(this.URL_MOB + `/${_id}`);
  }
}
