var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
const dbsql = require("../bd/dbsql");
/* GET home page. */

router.get('/', function(req, res, next) {

res.sendFile(path.join(__dirname, '/../views/', 'vendas.html'))
});

router.post('/envio', function(req, res, next) {

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


      parser.array('photos', 12)(req, res, err => {

        //insertprojeto
        //data

          if (err)
              res.status(500).json({ error: 1, payload: err });
          else {

            var  imageurl=""

              for (let i = 0; i < req.files.length; i++) {
                var imageid = req.files[i].filename;
               imageurl += `uploads/` +imageid+" ";
                    }

              var sqlp2 = dbsql.updateserviço(imageurl,req.body.numServiço);
              
              sqlp2.then(sql2 => {

                  console.log(sql2)
                   })

              res.redirect("http://localhost:3000/vendas")
          }
      });
  })


module.exports = router;
