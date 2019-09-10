import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service'
import {NgForm} from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { $ } from 'protractor';

declare var M: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers:[UsuarioService]
})
export class UsuariosComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }
  addUsuario(form: NgForm){
    
    if(form.value._id){
      this.usuarioService.putUsuario(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Usuario Actualizado'})
        this.getUsuarios();
        
      })
    }else{
      this.usuarioService.postUsuarios(form.value)
      .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Usuario Guardado'})
      this.getUsuarios();
      });
    }
    
  }
  editUsuario(usuario: Usuario){
    this.usuarioService.selectedUsuario= usuario;
  }
  deleteUsuario(_id:string){
    if(confirm('¿Estas seguro de eliminar? ')){
      this.usuarioService.deleteUsuario(_id)
      .subscribe(res=>{
        this.getUsuarios();
        M.toast({html:'Eliminado satisfactoriamente'});
    });
  }
  }

  getUsuarios(){
    this.usuarioService.getUsuarios()
    .subscribe(res =>{
    this.usuarioService.usuarios = res as Usuario[];
    console.log(res);

    });

  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.usuarioService.selectedUsuario = new Usuario();
    }
  }

}
