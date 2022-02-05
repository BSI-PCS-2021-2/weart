var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
const dbsql = require("../bd/dbsql");
/* GET home page. */



router.post('/', function(req, res, next) {

  var iduser= req.session.passport.user[0].clienteid;
  var nserviço= req.body.numero;
  router.get('/dados', (req, res) => {
  var sqlp = dbsql.checacomprasterminada(iduser,nserviço);
  sqlp.then(sql => {


      res.send(sql)
        })
  })
res.sendFile(path.join(__dirname, '/../views/', 'visualizar.html'))


});


router.post('/revisao', function(req, res, next) {


  var sqlp = dbsql.insererevisao(req.body.numServiço,req.body.textarea);
  sqlp.then(sql => {

      console.log(sql)
       })

      var sqlp2 = dbsql.diminuirevisao(req.body.numServiço);
      sqlp2.then(sql2 => {

          console.log(sql2)
           })




      res.redirect("http://localhost:3000/")
  })







router.post('/avaliacao', function(req, res, next) {

  var sqlp = dbsql.insereavaliacao(req.body.numServiço,req.body.comentario,req.body.rating);
 sqlp.then(sql => {

      console.log(sql)
       })
  var sqlp2 = dbsql.finalizaservico(req.body.numServiço);
  sqlp2.then(sql2 => {

           console.log(sql2)
            })


       res.redirect("http://localhost:3000/")
  })




module.exports = router;
