var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log()
res.sendFile(path.join(__dirname, '/../views/', 'compras.html'))
});

module.exports = router;
