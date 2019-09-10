const mongoose = require('mongoose');

const {Schema} = mongoose;

const MobiliarioSchema = new Schema ({
    nombre: {type: String, required: true},
    nominventario: {type: String, required:true},
    observaciones : {type:String, required:true}
});

module.exports = mongoose.model('Mobiliario', MobiliarioSchema);