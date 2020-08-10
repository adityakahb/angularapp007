var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdminSchema = new Schema({
  __FIRSTNAME: {
    type: String,
    required: [true, 'First name is required']
  },
  __MIDDLENAME:  {
    type: String
  },
  __LASTNAME: {
    type: String,
    required: [true, 'Last name is required']
  },
  __EMAIL: {
    type: String,
    index: true,
    unique: true,
    required: [true, 'emailID required']
  },
  __PASSWORD: {
    type: String,
    required: [true, 'password required']
  }
});

module.exports = mongoose.model('admin', AdminSchema);