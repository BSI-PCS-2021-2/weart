var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log()
res.sendFile(path.join(__dirname, '/../views/', 'compras.html'))
});


router.post('/', function(req, res, next) {
console.log(req.body.numero)

res.sendFile(path.join(__dirname, '/../views/', 'visualizar.html'))
});
module.exports = router;
