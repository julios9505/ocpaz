export class Libro {

    constructor(_id = '', nombre = '', numero=0, editorial = '', edicion = '', autor = '', estado='') {
     this._id = _id;
     this.nombre = nombre;
     this.numero = numero;
     this.editorial = editorial;
     this.edicion = edicion;
     this.autor = autor;
     this.estado=estado;
  
    }
  
  
    _id: String;
    nombre: String;
    numero: number;
    editorial: String;
    edicion: String;
    autor: String;
    estado:String;
  
  }