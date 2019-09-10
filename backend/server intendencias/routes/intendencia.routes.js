const express = require ('express');
const router = express.Router();

const intendencia = require('../controllers/intendencia.controller');


router.get('/', intendencia.getIntendencias);
router.post('/', intendencia.createIntendencia);
router.get('/:id', intendencia.getIntendencia);
router.put('/:id', intendencia.editIntendencia);
router.delete('/:id', intendencia.deleteIntendencia);
module.exports = router;