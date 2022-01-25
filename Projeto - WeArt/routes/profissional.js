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




router.get('/:id', function(req, res) {

  res.sendFile(path.join(__dirname, '/../views/', 'profissional.html'))
});
module.exports = router;
