const Intendencia = require ('../models/intendencia');
const intendenciaCtrl = {};

intendenciaCtrl.getIntendencias = async (req, res) =>  {
    const intendencias = await Intendencia.find();
    res.json(intendencias);
    
};

intendenciaCtrl.createIntendencia = async (req, res) => {
    const intendencia = new Intendencia({
        nombre: req.body.nombre,
        clave: req.body.clave,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad
    });
    
    await intendencia.save();
    res.json({'status': 'IntendenciaGuardado'});

};

intendenciaCtrl.getIntendencia = async (req, res) => {
    const intendencia = await Intendencia.findById(req.params.id);
    res.json(intendencia);

};

intendenciaCtrl.editIntendencia = async (req, res) => {
    const { id } = req.params;
    const intendencia = {
        nombre: req.body.nombre,
        clave: req.body.clave,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad
    };
    await Intendencia.findByIdAndUpdate(id, {$set: intendencia}, {new: true});
    res.json({status: 'Intendencia Actualizado'});

};

intendenciaCtrl.deleteIntendencia = async (req, res) => {
    await Intendencia.findByIdAndRemove(req.params.id);
    res.json({status: 'Intendencia Eliminado'});


};

module.exports = intendenciaCtrl;