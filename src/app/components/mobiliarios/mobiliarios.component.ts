import { Component, OnInit } from '@angular/core';
import {MobiliarioService} from '../../services/mobiliario.service'
import {NgForm} from '@angular/forms';
import { Mobiliario } from 'src/app/models/mobiliario';

declare var M: any;

@Component({
  selector: 'app-mobiliarios',
  templateUrl: './mobiliarios.component.html',
  styleUrls: ['./mobiliarios.component.css'],
  providers:[MobiliarioService]
})
export class MobiliariosComponent implements OnInit {

  constructor(public mobiliarioService: MobiliarioService) { }

  ngOnInit() {
    this.getMobiliarios();
  }
  addMobiliario(form: NgForm){
    if(form.value._id){
      this.mobiliarioService.putMobiliario(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Mobiliario Actualizado'})
        this.getMobiliarios();
        
      })
    }else{
      this.mobiliarioService.postMobiliarios(form.value)
      .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Mobiliario Guardado'})
      this.getMobiliarios();
      });
    }
    
  }
  editMobiliario(mobiliario: Mobiliario){
    this.mobiliarioService.selectedMobiliario= mobiliario;
  }
  deleteMobiliario(_id:string){
    if(confirm('¿Estas seguro de eliminar? ')){
      this.mobiliarioService.deleteMobiliario(_id)
      .subscribe(res=>{
        this.getMobiliarios();
        M.toast({html:'Eliminado satisfactoriamente'});
    });
  }
  }

  getMobiliarios(){
    this.mobiliarioService.getMobiliarios()
    .subscribe(res =>{
    this.mobiliarioService.mobiliarios = res as Mobiliario[];
    console.log(res);

    });

  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.mobiliarioService.selectedMobiliario = new Mobiliario();
    }
  }

}
