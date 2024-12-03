var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next){
    res.send('Hey, soy parte de un manejador de rutas!!! Pero como sos la profesora y leiste el código seguramente ya lo sabías')
})

module.exports = router;