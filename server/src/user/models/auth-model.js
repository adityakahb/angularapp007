// models/user-model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let userAuthSchema = new Schema({
  __EMAIL: {
    type: String,
    unique: true
  },
  __PASSWORD: {
    type: String
  }
}, {
  collection: 'user_auth'
});

userAuthSchema.plugin(uniqueValidator, {
  message: 'Email already in use.'
});
module.exports = mongoose.model('userauth', userAuthSchema);