const express = require('express');
const router = express.Router();

const lectura = require('../controllers/lectura.controller');

router.get('/', lectura.getLecturas);
router.post('/', lectura.createLectura);
router.get('/:id', lectura.getLectura);
console.log(lectura.getLectura)
router.put('/:id', lectura.editLectura);
router.delete('/:id', lectura.deleteLectura);

module.exports = router;