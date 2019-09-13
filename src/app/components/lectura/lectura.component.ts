import { Component, OnInit } from '@angular/core';

import { LecturaService } from '../../services/lectura.service';
import { NgForm } from '@angular/forms';
import { Lectura } from '../../models/lectura';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

declare var M: any;

@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.component.html',
  styleUrls: ['./lectura.component.css'],
  providers: [ LecturaService ]
})
export class LecturaComponent implements OnInit {

  lecturas = [];
  alumno: Employee;
  alumnos;
  constructor(public lecturaService: LecturaService, public employeeService: EmployeeService, public alumServ:EmployeeService) { }

  ngOnInit() {
    this.getLecturas();
    this.getAlumnos();
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
        for(let e of this.lecturaService.lecturas) {
          var idAlum = e["name"];
          this.alumServ.getAlumno(idAlum).subscribe(res => {
            this.alumno = res as Employee;
            var nombre = this.alumno.name + ' ' + this.alumno.apellido;
            var id = this.alumno._id;
            var lects = {
              id: id,
              name: nombre,
              palabras: e.palabras,
              seg: e.segundos,
              vel: e.velocidad
            }
            this.lecturas.push(lects);
          });
          
        }
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

  getAlumnos() {
    this.employeeService.getEmployees().subscribe(res => {
      this.alumnos= res as Employee[];
    });
  }

}
