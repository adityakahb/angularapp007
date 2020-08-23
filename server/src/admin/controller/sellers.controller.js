const sellerdata = require('./../../static-data/manage-sellers.json');
const sellerSchema = require('../models/seller-model');
exports.viewsellers = (req, res) => {
  
};
exports.addbulksellers = (req, res) => {
  sellerSchema.insertMany(sellerdata).then((response) => {
    console.log('============Seller data pushed to DB');
  });
  res.status(201).json({
    message: 'Sample 201',
    result: res
  });
};