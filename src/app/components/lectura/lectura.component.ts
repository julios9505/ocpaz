import { Component, OnInit } from '@angular/core';

import { LecturaService } from '../../services/lectura.service';
import { NgForm } from '@angular/forms';
import { Lectura } from '../../models/lectura';

declare var M: any;

@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.component.html',
  styleUrls: ['./lectura.component.css'],
  providers: [ LecturaService ]
})
export class LecturaComponent implements OnInit {

  constructor(public lecturaService: LecturaService) { }

  ngOnInit() {
    this.getLecturas();
  }

  addLectura(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.lecturaService.putLectura(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getLecturas();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.lecturaService.postLectura(form.value)
      .subscribe(res => {
        this.getLecturas();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getLecturas() {
    this.lecturaService.getLecturas()
      .subscribe(res => {
        this.lecturaService.lecturas = res as Lectura[];
      });
  }

  editLectura(lectura: Lectura) {
    this.lecturaService.selectedLectura = lectura;
  }

  deleteLectura(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.lecturaService.deleteLectura(_id)
        .subscribe(res => {
          this.getLecturas();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.lecturaService.selectedLectura = new Lectura();
    }
  }

}
