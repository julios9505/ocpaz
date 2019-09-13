import { Component } from '@angular/core';
import { LecturaService } from 'src/app/services/lectura.service';
import { Lectura } from 'src/app/models/lectura';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {
  
  iNumero: number;
  iCons;
  public alumno:Employee;
  lecturas = [];
  alumnos = [];

  constructor(public lecturaService: LecturaService, public router:Router, public alumServ:EmployeeService) { }

  ngOnInit() {
    this.getLecturas();
    this.iNumero = 1;
    this.iCons=0;
    this.barChartLabels= [];
    this.barChartData = [];
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLabels:string[];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[];
  // public barChartData:any[] = [
  //   {data: [50, 59, 80, 81, 56, 55, 40], label: 'Tamales'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Chorizo'}
  // ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  getLecturas() {
    this.lecturaService.getLecturas()
      .subscribe(res => {
        this.lecturaService.lecturas = res as Lectura[];
        // console.log(this.lecturaService.lecturas)
        // se recorre array de lecturas
        for(let element of this.lecturaService.lecturas) {
          var idAlum = element["name"];
          var e = this.alumnos.indexOf(idAlum);
          //si el elemento no existe
          if(e === -1) {
            this.alumServ.getAlumno(idAlum).subscribe(res => {
              this.alumno = res as Employee;
              var nombre = this.alumno.name + ' ' + this.alumno.apellido;
              var id = this.alumno._id;
              var student = {
                id: id,
                name: nombre
              }
              console.log(student)
              this.alumnos.push(student);
              console.log(this.alumnos)
            });
          }
        }
      });
  }

  verGrafica(alumno: any) {
    this.lecturaService.getLecturas2(alumno).subscribe(res => {
      this.lecturas = res as Lectura[];
      //muestra la grafica
      this.iNumero = 2;

      // proceso de grafica
      for(let item of this.lecturas) {
        var reg='Velocidad '+ ++this.iCons;
        // var datos=[[item.velocidad], reg];
        var datos = {
          data: item.velocidad,
          label: 'Velocidad'
        }
        // se inserta en el arreglo 
        this.barChartLabels.push(reg);
        this.barChartData.push(datos);
        console.log(this.barChartData);
      }
    });
  }
  regresar(){
    if (this.iNumero==1){
      this.router.navigateByUrl('buttons');
    }else{
      this.iNumero=1;
      this.barChartLabels= [];
      this.barChartData = [];
      this.iCons=0;
    }
  }

  getAlumno(id:any) {
    this.alumServ.getAlumno(id).subscribe(res => {
      this.alumno = res as Employee;
      console.log(this.alumno);
    });
  }

}
