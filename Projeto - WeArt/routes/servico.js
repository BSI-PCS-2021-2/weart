
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
  var pacote= req.body.pacote;

  router.get('/dados', (req, res) => {
  res.send({profid:profid,preco:preco,nomeArtistico:nomeArtistico,pacote:pacote})

  })

res.sendFile(path.join(__dirname, '/../views/', 'servico.html'))


});
router.post('/fim', function(req, res, next) {
  let date = new Date();
  dbsql.insertservico({clienteid: req.session.passport.user[0].clienteid ,profid: req.body.profid,preco: req.body.preco ,descricao: req.body.descricao,pacote: req.body.pacote, data: date})


res.redirect("http://localhost:3000/")

});
module.exports = router;
