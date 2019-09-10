const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: { type: String, required: true},
    apellido: { type: String, required: true },
    grupo: { type: String, required: true },
    nocontrol: { type: Number, required: true}
});

module.exports = mongoose.model('Employee', employeeSchema);