const dbsql = require("./bd/dbsql");
var express = require('express');
var path = require('path');

app.get('/data', (req, res) => {
  var sqlp = dbsql.selectclientesJoinProf();
  sqlp.then(sql => {
      res.send(sql)

  })
});
