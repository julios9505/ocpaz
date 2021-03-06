const Lectura = require('../models/lectura');

const lecturaCtrl = {};

lecturaCtrl.getLecturas = async (req, res, next) => {
    const lecturas = await Lectura.find();
    res.json(lecturas);
};

lecturaCtrl.createLectura = async (req, res, next) => {
    const lectura = new Lectura({
        name: req.body.alumno,
        palabras: req.body.palabras,
        segundos: req.body.segundos,
        velocidad: req.body.velocidad
    });
    await lectura.save();
    res.json({status: 'Lectura created'});
};

lecturaCtrl.getLectura = async (req, res, next) => {
    const { id } = req.params;
    const lectura = await Lectura.find({"name":id});
    res.json(lectura);
};

lecturaCtrl.getLectura2 = async (req, res, next) => {
    const { alumno } = req.params;
    console.log(alumno);
    const lectura = await Lectura.find({"name": "julio"});
    res.json(lectura);
};

lecturaCtrl.editLectura = async (req, res, next) => {
    const { id } = req.params;
    const lectura = {
        name: req.body.alumno,
        palabras: req.body.palabras,
        segundos: req.body.segundos,
        velocidad: req.body.velocidad
    };
    await Lectura.findByIdAndUpdate(id, {$set: lectura}, {new: true});
    res.json({status: 'Lectura Updated'});
};

lecturaCtrl.deleteLectura = async (req, res, next) => {
    await Lectura.findByIdAndRemove(req.params.id);
    res.json({status: 'Lectura Deleted'});
};

module.exports = lecturaCtrl;