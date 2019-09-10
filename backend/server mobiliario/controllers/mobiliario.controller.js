const Mobiliario = require('../models/mobiliario');
const mobiliarioCtrl = {};

mobiliarioCtrl.getMobiliarios = async (req,res) => {
    const mobiliarios = await Mobiliario.find();
    res.json(mobiliarios);
};

mobiliarioCtrl.createMobiliario = async (req,res) =>{
    const mobiliario = new Mobiliario({
        nombre: req.body.nombre,
        nominventario: req.body.nominventario,
        observaciones: req.body.observaciones

    });
    await mobiliario.save();
    res.json({
        status: 'Mobiliario Guardado'
    });
};
mobiliarioCtrl.getMobiliario  = async (req,res) =>{
    const mobiliario = await Mobiliario.findById(req.params.id);
    res.json(mobiliario);
}
mobiliarioCtrl.editMobiliario  =async (req,res) => {
    const {id} = req.params;
    const mobiliario = {
        nombre: req.body.nombre,
        nominventario: req.body.nominventario,
        observaciones: req.body.observaciones
    };
    await Mobiliario.findByIdAndUpdate(id, {$set:mobiliario}, {new: true});
    res.json({status: 'Mobiliario actualizado'});
}
mobiliarioCtrl.deleteMobiliario  =async (req,res) => {
    await Mobiliario.findByIdAndRemove(req.params.id);
    res.json({status: "Mobiliario eliminado"});
}


module.exports = mobiliarioCtrl;