var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
const dbsql = require("../bd/dbsql");
const url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
 id= url.parse(req.url,true).query
res.sendFile(path.join(__dirname, '/../views/', 'validacao.html'))

});

router.post('/envio', function(req, res, next) {



  if(req.body.tipoArte!="" && req.body.infoBancarias!=""){
    var inserta= dbsql.insertCliente_profissional({clienteid: id.id,tipoArte: req.body.tipoArte,infoBancarias: req.body.infoBancarias,nomeArtistico: req.body.nomeArtistico})

    inserta.then(inser => {
    dbsql.insertportfolio(inser[0].insertId)
    })



    res.redirect("http://localhost:3000/")
  }



else{res.redirect("http://localhost:3000/validacao?id=" + id.id)}

});






module.exports = router;
