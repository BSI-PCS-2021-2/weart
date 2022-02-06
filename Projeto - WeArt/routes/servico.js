
var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
const dbsql = require("../bd/dbsql");
const fs = require("fs");
var nodemailer = require('nodemailer');
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

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'weartmails@gmail.com',
      pass: 'tuvkkocoewdsvkwj'
    }
  });
var to=req.session.passport.user[0].email;
  var mailOptions = {
    from: 'weartmails@gmail.com',
    to: to,
    subject: 'Compra efetuada',
    text: 'sua compra foi efetuada, aguardamos seu pagamento!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });





res.redirect("http://localhost:3000/")



});
module.exports = router;
