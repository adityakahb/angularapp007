// models/user-model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let adminSchema = new Schema({
  __FIRSTNAME: {
    type: String
  },
  __MIDDLENAME: {
    type: String
  },
  __LASTNAME: {
    type: String
  },
  __EMAIL: {
    type: String,
    unique: true
  }
}, {
  collection: 'admin_master'
});

adminSchema.plugin(uniqueValidator, {
  message: 'Email already in use.'
});
module.exports = mongoose.model('Admin', adminSchema);