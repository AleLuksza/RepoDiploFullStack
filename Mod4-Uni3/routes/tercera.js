var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next){
    res.send('Hola, soy la ruta numero tres que completa esta tarea y soy igual a la segunda en tanto que formo parte de un manejador de rutas.')
})

module.exports = router;