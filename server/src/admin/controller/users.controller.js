const userdata = require('./../../static-data/manage-users.json');
const userSchema = require('../models/user-model');
exports.viewusers = (req, res) => {
  
};
exports.addbulkusers = (req, res) => {
  userSchema.insertMany(userdata).then((response) => {
    console.log('============User data pushed to DB');
  });
  res.status(201).json({
    message: 'Sample 201',
    result: res
  });
};