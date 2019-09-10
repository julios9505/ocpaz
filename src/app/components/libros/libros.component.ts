import { Component, OnInit } from '@angular/core';

import { LibroService } from '../../services/libro.service';
import { NgForm } from '@angular/forms';
import { Libro } from 'src/app/models/libro';
import { stringify } from '@angular/compiler/src/util';

declare var M: any;



@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
  providers : [LibroService]
})
export class LibrosComponent implements OnInit {

  constructor(public libroService: LibroService) { }

  ngOnInit() {
    this.getLibros();
  }
  addLibro(form: NgForm){
    if(form.value._id){
      this.libroService.putLibro(form.value)
      .subscribe(res => {
        
        this.resetForm(form);
        M.toast({html: "Actualizado con Exito" });
        this.getLibros();
      })
    } else {
      this.libroService.postLibro(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: "Guardado con Exito" });
        this.getLibros();
    
  });

    }


  }



getLibros(){
this.libroService.getLibros()
.subscribe(res =>{
this.libroService.libro = res as Libro[];
console.log(res);


});


}

editLibro(libro: Libro){
this.libroService.selectedLibro = libro;

}

deleteLibro(_id: string){
if(confirm ('Estas seguro de eliminarlo?')){
this.libroService.deleteLibro(_id)
.subscribe( res => {
  this.getLibros();
  M.toast({html: 'Borrado con Exito'});
});
}



}

resetForm(form?: NgForm){
if (form){
form.reset();
this.libroService.selectedLibro = new Libro();
}


}
}
