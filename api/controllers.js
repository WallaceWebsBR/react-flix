var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt'),
  User = mongoose.model('User');
require('dotenv').config({path:'../.env'})
secret = process.env['JWT_SECRET'];

exports.register = function(req, res) {
  var NovoUser = new User(req.body);
  NovoUser.hash_password = bcrypt.hashSync(req.body.password, 12);
  NovoUser.save(function(err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      user.hash_password = undefined;
      return res.json(user);
    }
  });
};

exports.sign_in = function(req, res) {
  User.findOne({
    login: req.body.login
  }, function(err, user) {
    if (err) throw err;
    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(401).json({ message: 'iih... Errou a senha ou usuario.' });
    }
    return res.json({ token: jwt.sign({ email: user.login, _id: user._id }, secret) });
  });
};

exports.loginRequired = function(req, res, next) {
  if (req.user) {
    next();
  } else {

    return res.status(401).json({ message: 'Sai fora!! Não Autenticado.' });
  }
};
exports.profile = function(req, res, next) {
  if (req.user) {
    res.send(req.user);
    next();
  } 
  else {
   return res.status(401).json({ message: 'Token invalido! Faça autenticação novamente...' });
  }
};