var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
const dbsql = require("../dbsql");
const url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
 id= url.parse(req.url,true).query
res.sendFile(path.join(__dirname, '/../', 'validacao.html'))

});

router.post('/envio', function(req, res, next) {



  if(req.body.tipoArte!="" && req.body.infoBancarias!=""){
    console.log(id.id)
    dbsql.insertCliente_profissional({clienteid: id.id,tipoArte: req.body.tipoArte,infoBancarias: req.body.infoBancarias})
    res.redirect("http://localhost:3000/")
  }



else{res.redirect("http://localhost:3000/validacao?id=" + id.id)}

});






module.exports = router;
