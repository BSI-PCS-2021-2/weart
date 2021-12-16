var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
const dbsql = require("../dbsql");
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log()
res.sendFile(path.join(__dirname, '/../', 'validacao.html'))
});

router.post('/envio', function(req, res, next) {
  res.redirect("http://localhost:3000/");


});

module.exports = router;
