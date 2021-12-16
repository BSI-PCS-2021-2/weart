var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
const dbsql = require("../dbsql");

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log()
res.sendFile(path.join(__dirname, '/../', 'cadastro.html'))
});
router.post('/envio', function(req, res, next) {
if(req.body.idade!="" && req.body.Email!="" && req.body.nome!="" && req.body.infoCartão!="" && req.body.endereço!="" && req.body.tel!="" && req.body.Senha!=""){
    console.log("foi")
  var inserta = dbsql.insertclientes({idade: req.body.idade, email: req.body.Email, nome: req.body.nome,infoCartão: req.body.infoCartão,endereçoCompra: req.body.endereço,telefone: req.body.tel,senha: req.body.Senha})


  if(req.body.prof=="on"){
    inserta.then(inser => {
    res.redirect("http://localhost:3000/validacao?id=" + inser[0].insertId)
    })
}
  else{
  res.redirect("http://localhost:3000/")}
}
else{
  console.log("não foi")
  res.redirect("http://localhost:3000/cadastro")
}



});
module.exports = router;
