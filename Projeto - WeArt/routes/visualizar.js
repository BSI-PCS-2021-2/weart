var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
const dbsql = require("../bd/dbsql");
/* GET home page. */



router.post('/', function(req, res, next) {
  var sqlp = dbsql.checacomprasterminada(req.session.passport.user[0].clienteid,req.body.numero);
  sqlp.then(sql => {
    console.log(sql)
    router.get('/dados', (req, res) => {
      res.send(sql)
        })
  })
res.sendFile(path.join(__dirname, '/../views/', 'visualizar.html'))


});
module.exports = router;
