const categorydata = require('./../../static-data/manage-categories.json');
const categorySchema = require('../models/category-model');
exports.viewcategories = (req, res) => {
  
};
exports.addbulkcategories = (req, res) => {
  categorySchema.insertMany(categorydata).then((response) => {
    console.log('============Category data pushed to DB');
  });
  res.status(201).json({
    message: 'Sample 201',
    result: res
  });
};