import { Employee } from './employee';

export class Lectura {

    constructor(_id = '', alumno = new Employee(), palabras = '', segundos = '', velocidad = 0) {
        this._id = _id;
        this.alumno = alumno;
        this.palabras = palabras;
        this.segundos = segundos;
        this.velocidad = velocidad;
    }

    _id: string;
    alumno: Employee;
    palabras: string;
    segundos: string;
    velocidad: number;
}
