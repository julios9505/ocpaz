import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  selectedUsuario : Usuario;
  usuarios:Usuario[];
  //local
  //readonly URL_API = 'http://localhost:3200/api/usuarios'

  //heroku
  readonly URL_USU = '/api/usuarios'

  constructor(private http: HttpClient) { 
    this.selectedUsuario = new Usuario();
  }

  getUsuarios (){
    return this.http.get(this.URL_USU);
  }

  postUsuarios(Usuario: Usuario){
    return this.http.post(this.URL_USU, Usuario);
  }

  putUsuario(Usuario :Usuario){
    return this.http.put(this.URL_USU + `/${Usuario._id}`, Usuario )
  }

  deleteUsuario(_id:String){
    return this.http.delete(this.URL_USU + `/${_id}`);
  }
}
