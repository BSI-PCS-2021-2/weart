var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
var autenticacaoRouter = require('./routes/autenticacao');
var cadastroRouter = require('./routes/cadastro');
var validacaoRouter = require('./routes/validacao');

var app = express();

const dbsql = require("./dbsql");

var bodyParser = require('body-parser')




app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', indexRouter);
app.use('/autenticacao', autenticacaoRouter);
app.use('/cadastro', cadastroRouter);
app.use('/validacao', validacaoRouter);

var sqlp = dbsql.selectclientes();
sqlp.then(sql => {

})

  app.get('/data', (req, res) => {
    var sqlp = dbsql.selectclientes();
    sqlp.then(sql => {
        res.send(sql)

    })
  });




app.listen(3000, function(){});
