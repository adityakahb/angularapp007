const productdata = require('./../../static-data/manage-products.json');
const productSchema = require('../models/product-model');
exports.viewproducts = (req, res) => {
  
};
exports.addbulkproducts = (req,res) => {
  productSchema.insertMany(productdata).then((response) => {
    console.log('============Product data pushed to DB');
  });
  res.status(201).json({
    message: 'Sample 201',
    result: res
  });
};