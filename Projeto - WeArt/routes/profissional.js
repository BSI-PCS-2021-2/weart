var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
const dbsql = require("../bd/dbsql");

router.get('/dados/:id', function(req, res) {
  var sqlp = dbsql.selectprojetobyidprof(req.params.id);
  sqlp.then(sql => {
      res.send(sql)

  })
  });

router.get('/dados2/:id', function(req, res) {
    var sqlp = dbsql.selectportfoliobyidprof(req.params.id);
    sqlp.then(sql => {
        res.send(sql)

    })
    });

  router.get('/notas/:id', function(req, res) {
    var sqlp = dbsql.selectavalia(req.params.id);
    sqlp.then(sql => {
        res.send(sql)

    })




});




router.get('/:id', function(req, res) {
console.log(req.session.passport.user)
if(req.session.passport.user != undefined){
  res.sendFile(path.join(__dirname, '/../views/', 'profissional.html'))
}
else{res.redirect('http://localhost:3000/autenticacao')}
});
module.exports = router;
