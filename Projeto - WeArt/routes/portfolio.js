var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
const dbsql = require("../bd/dbsql");
const { ImgurClient } = require('imgur')
const fs = require('fs')
const fileUpload = require('express-fileupload')
const client = new ImgurClient({ clientId: '8f9c0238936fa87' })

router.get('/', function(req, res, next) {

res.sendFile(path.join(__dirname, '/../views/', 'portfolio.html'))
});

router.post('/enviodesc', function(req, res, next) {

  dbsql.updateportfolio(req.body.profid,{descricao: req.body.descricao, Preco1: req.body.preco1,Preco2: req.body.preco2,Preco3: req.body.preco3})
  res.redirect("http://localhost:3000/portfolio")
});


router.post('/envio', async function(req, res, next) {

  const multer = require('multer');

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '.jpg') //Appending .jpg
    }
  })

  const parser = multer({ storage: storage })


      parser.array('photos', 12)(req, res, err =>  {

        //insertprojeto
        //data

          if (err)
              res.status(500).json({ error: 1, payload: err });
          else {

            var  imageurl=""
            var  count=0;
              for (let i = 0; i < req.files.length;i++) {
                var imageid = req.files[i].filename;
                var localurl =`public/uploads/` +imageid;



               const response =  client.upload({
                  image: fs.createReadStream(localurl),
                  type: 'stream',
                  });

               response.then(resp => {
                 imageurl += resp.data.link+" ";
                   
                   count++
                   if(count==req.files.length){
                     var sqlp2 = dbsql.insertprojeto({profid: req.body.profid,nome: req.body.nome,data: req.body.data,imagens: imageurl});
                     sqlp2.then(sql2 => {

                       console.log(sql2)

                          })

                   }
               })
             }



              res.redirect("http://localhost:3000/portfolio")
          }
      });




});

router.post('/deletar', function(req, res, next) {

var sqlp2 = dbsql.deleteprojeto(req.body.del);
sqlp2.then(sql2 => {

    console.log(sql2)
     })

res.redirect("http://localhost:3000/portfolio")
});

module.exports = router;
