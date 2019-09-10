const express = require('express');
const router = express.Router();

const mobiliario = require('../controllers/mobiliario.controller');

router.get('/', mobiliario.getMobiliarios);
router.post('/', mobiliario.createMobiliario);
router.get('/:id', mobiliario.getMobiliario);
router.put('/:id', mobiliario.editMobiliario);
router.delete('/:id', mobiliario.deleteMobiliario);


module.exports = router;