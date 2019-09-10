const mongoose = require('mongoose');

const {Schema} = mongoose;

const LibroSchema = new Schema({
    nombre: {type: String, required:true},
    numero: {type : Number, required:true},
    editorial: {type: String, required:true},
    edicion: {type: String, required:true},
    autor: {type: String, required:true},
   estado: {type:String}
       
});

module.exports = mongoose.model('Libro', LibroSchema);