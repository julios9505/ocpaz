const Libro = require ('../models/libro');
const libroCtrl = {};

libroCtrl.getLibros = async (req, res) =>  {
    const libros = await Libro.find();
    res.json(libros);
    
};

libroCtrl.createLibro = async (req, res) => {
    const libro = new Libro({
        nombre: req.body.nombre,
        numero: req.body.numero,
        editorial: req.body.editorial,
        edicion: req.body.edicion,
        autor: req.body.autor,
        estado: req.body.estado
    });
    
    await libro.save();
    res.json({'status': 'Libro Guardado'});

};

libroCtrl.getLibro = async (req, res) => {
    const libro = await Libro.findById(req.params.id);
    res.json(libro);

};

libroCtrl.editLibro = async (req, res) => {
    const { id } = req.params;
    const libro = {
        nombre: req.body.nombre,
        numero: req.body.numero,
        editorial: req.body.editorial,
        edicion: req.body.edicion,
        autor: req.body.autor,
        estado: req.body.estado
    };
    await Libro.findByIdAndUpdate(id, {$set: libro}, {new: true});
    res.json({status: 'Libro Actualizado'});

};

libroCtrl.deleteLibro = async (req, res) => {
    await Libro.findByIdAndRemove(req.params.id);
    res.json({status: 'Libro Eliminado'});


};

module.exports = libroCtrl;