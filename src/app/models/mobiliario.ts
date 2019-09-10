export class Mobiliario {
constructor(_id = '', nombre='', nominventario='', observaciones='' ){
    this._id = _id;
    this.nombre=nombre;
    this.nominventario=nominventario;
    this.observaciones=observaciones;

}

    _id: string;
    nombre:string;
    nominventario:string;
    observaciones:string;

}
