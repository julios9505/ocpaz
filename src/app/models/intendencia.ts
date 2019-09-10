export class Intendencia {

    constructor(_id = '', nombre = '', clave=0,cantidad=0, descripcion = '',) {
     this._id = _id;
     this.nombre = nombre;
     this.clave = clave;
     this.cantidad = cantidad;
     this.descripcion = descripcion;
  
    }
  
  
    _id: String;
    nombre: String;
    clave: number;
    cantidad: number;
    descripcion: String;
  
  }