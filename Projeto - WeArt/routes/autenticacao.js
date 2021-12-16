var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
const dbsql = require("../dbsql");
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log()
res.sendFile(path.join(__dirname, '/../', 'autenticacao.html'))
});


router.post('/envio', function(req, res, next) {
  if(req.body.Email!="" && req.body.Senha!=""){
    console.log("ta indo meu amigo")

  var sqlp =  dbsql.checalogin(req.body.Email,req.body.Senha)
  sqlp.then(sql => {
  console.log(sql)
  console.log(sql.length)
  if(sql.length>=1){res.redirect("http://localhost:3000/")}
  else{  res.redirect("http://localhost:3000/autenticacao")}
  })
}
else{res.redirect("http://localhost:3000/autenticacao")}

});

module.exports = router;
