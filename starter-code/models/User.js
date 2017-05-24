var mongoose = require('mongoose');

//object after User is a Schema
module.exports = mongoose.model('User',{
  fb: {
    id: String,
    access_token: String,
    firstName: String,
    lastName: String,
    email: String
  }
});
