var mongoose = require('mongoose');
  bcrypt = require('bcrypt');
  Schema = mongoose.Schema;


var ModelUsuario = new Schema({
    login: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true
    },
    hash_password: {
      type: String
    },
    created: {
      type: Date,
      default: Date.now
    }
  });

  
ModelUsuario.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
  };
  
mongoose.model('User', ModelUsuario);