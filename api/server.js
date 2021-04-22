const MongoClient = require('mongodb').MongoClient;
require('dotenv').config({path:'../.env'})
var express = require('express'),
  app = express(),
  port = 3000,


  User = require('./model'),
  bodyParser = require('body-parser'),
  jsonwebtoken = require("jsonwebtoken");

const mongoURI = process.env.MONGODB_URI;
const db = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
db.connect(err => {
    if(err){
      console.log('Deu erro no mongoDB: ' + err)
    }else{
      console.log('MongoDB Conectado com sucesso! ')
    }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET, function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});
var routes = require('./routes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' Não Encontrado' })
});

app.listen(port);

console.log(' RESTful API server iniciado na porta : ' + port);

module.exports = app;