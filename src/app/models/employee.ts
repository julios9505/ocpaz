export class Employee {

    constructor(_id = '', name = '', apellido = '', grupo = '', nocontrol = 0) {
        this._id = _id;
        this.name = name;
        this.apellido = apellido;
        this.grupo = grupo;
        this.nocontrol = nocontrol;
    }

    _id: string;
    name: string;
    apellido: string;
    grupo: string;
    nocontrol: number;
}
