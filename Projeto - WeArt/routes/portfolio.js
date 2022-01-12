var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
const dbsql = require("../bd/dbsql");





router.get('/', function(req, res, next) {

res.sendFile(path.join(__dirname, '/../views/', 'portfolio.html'))
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
          if (err)
              res.status(500).json({ error: 1, payload: err });
          else {

            var  imageurl=""

              for (let i = 0; i < req.files.length; i++) {
                var imageid = req.files[i].filename;
               imageurl += `uploads/` +imageid+" ";
                    }
              console.log("image.url: ");
              console.log(imageurl);

            //  console.log(image);
              res.redirect("http://localhost:3000/")
          }
      });




});

module.exports = router;
