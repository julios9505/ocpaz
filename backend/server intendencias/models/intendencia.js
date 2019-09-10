const mongoose = require('mongoose');

const {Schema} = mongoose;

const IntendenciaSchema = new Schema({
    nombre: {type: String, required:true},
    clave: {type : Number, required:true},
    cantidad: {type: Number, required:true},
    descripcion: {type: String, required:true}
});

module.exports = mongoose.model('Intendencia', IntendenciaSchema);