var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser')
const dbsql = require("../bd/dbsql");
const passport = require("passport");
/* GET home page. */
router.get('/', function(req, res, next) {

res.sendFile(path.join(__dirname, '/../views/', 'autenticacao.html'))
});



router.post('/envio2', function(req, res, next) {
passport.authenticate("local",{
  successRedirect:"/",
  failureRedirect:"/autenticacao",
  failureFlash: true
})(req, res, next)

});

router.get('/logout', function(req, res, next) {
req.logout();
res.redirect("/");
});


router.get('/log', function(req, res, next) {

});


module.exports = router;
