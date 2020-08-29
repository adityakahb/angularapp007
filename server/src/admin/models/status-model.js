const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let statusSchema = new Schema({
  __NAME: {
    type: String
  },
  __TYPE: {
    type: String
  },
  __STATUS: {
    type: String
  }
}, {
  collection: 'status_master'
});

module.exports = mongoose.model('Status', statusSchema);