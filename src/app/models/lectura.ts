export class Lectura {

    constructor(_id = '', name = '', palabras = '', segundos = '', velocidad = 0) {
        this._id = _id;
        this.name = name;
        this.palabras = palabras;
        this.segundos = segundos;
        this.velocidad = velocidad;
    }

    _id: string;
    name: string;
    palabras: string;
    segundos: string;
    velocidad: number;
}
