
var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
const dbsql = require("../bd/dbsql");
/* GET home page. */




router.post('/', function(req, res, next) {

  var profid= req.body.profid;
  var preco= req.body.preco;
  var nomeArtistico= req.body.nomeArtistico;


  router.get('/dados', (req, res) => {
  res.send({profid:profid,preco:preco,nomeArtistico:nomeArtistico})

  })

res.sendFile(path.join(__dirname, '/../views/', 'servico.html'))


});
router.post('/fim', function(req, res, next) {
  console.log(req.body)
res.redirect("http://localhost:3000/")

});
module.exports = router;
