const mongoose = require('mongoose');
const { Schema } = mongoose;

const lecturaSchema = new Schema({
    name: { type: String, required: true},
    palabras: { type: String, required: true },
    segundos: { type: String, required: true },
    velocidad: { type: Number, required: true}
});

module.exports = mongoose.model('Lectura', lecturaSchema);

