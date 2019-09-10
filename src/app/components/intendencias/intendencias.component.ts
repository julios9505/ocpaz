import { Component, OnInit } from '@angular/core';

import { IntendenciaService } from '../../services/intendencia.service';
import { NgForm } from '@angular/forms';
import { Intendencia } from 'src/app/models/intendencia';
import { stringify } from '@angular/compiler/src/util';

declare var M: any;



@Component({
  selector: 'app-intendencias',
  templateUrl: './intendencias.component.html',
  styleUrls: ['./intendencias.component.css'],
  providers: [IntendenciaService]
})
export class IntendenciasComponent implements OnInit {

  constructor(public intendenciaService: IntendenciaService) { }

  ngOnInit() {
    this.getIntendencias();
  }
  addIntendencia(form: NgForm) {
    if (form.value._id) {
      this.intendenciaService.putIntendencia(form.value)
        .subscribe(res => {

          this.resetForm(form);
          M.toast({ html: "Actualizado con Exito" });
          this.getIntendencias();
        })
    } else {
      this.intendenciaService.postIntendencia(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({ html: "Guardado con Exito" });
          this.getIntendencias();

        });

    }


  }



  getIntendencias() {
    this.intendenciaService.getIntendencias()
      .subscribe(res => {
        this.intendenciaService.intendencia = res as Intendencia[];
        console.log(res);


      });


  }

  editIntendencia(intendencia: Intendencia) {
    this.intendenciaService.selectedIntendencia = intendencia;

  }

  deleteIntendencia(_id: string) {
    if (confirm('Estas seguro de eliminarlo?')) {
      this.intendenciaService.deleteIntendencia(_id)
        .subscribe(res => {
          this.getIntendencias();
          M.toast({ html: 'Borrado con Exito' });
        });
    }



  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.intendenciaService.selectedIntendencia = new Intendencia();
    }


  }
}
