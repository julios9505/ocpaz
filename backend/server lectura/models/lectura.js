const mongoose = require('mongoose');
const { Schema } = mongoose;
const alumno= require('../../server alumno/models/employee')
const lecturaSchema = new Schema({
    name: { type: Schema.Types.ObjectId, ref:'alumno', required: false},
    palabras: { type: String, required: true },
    segundos: { type: String, required: true },
    velocidad: { type: Number, required: true}
});

module.exports = mongoose.model('Lectura', lecturaSchema);

