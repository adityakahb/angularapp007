const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categorySchema = new Schema({
  __REFERENCEID: {
    type: Schema.Types.ObjectId
  },
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __PARENTID: {
    type: Schema.Types.ObjectId
  }
}, { _id : false });

let imageSchema = new Schema({
  __URL: {
    type: String
  },
  __ZOOMURL: {
    type: String
  }
}, { _id : false });

let priceSchema = new Schema({
  __MAJOR: {
    type: String
  },
  __MINOR: {
    type: String
  },
  __CURRENCY: {
    type: String
  },
  __ISPRIMARY: {
    type: Boolean
  },
  __UPDATED: {
    type: Date
  }
}, { _id : false });

let productSchema = new Schema({
  __REFERENCEID: {
    type: Schema.Types.ObjectId
  },
  __NAME: {
    type: String,
    index: true
  },
  __URL: {
    type: String
  },
  __STATUSID: {
    type: Schema.Types.ObjectId
  },
  __ISOUTOFSTOCK: {
    type: Boolean
  },
  __PRICE: {
    type: [priceSchema],
    index: true
  },
  __IMAGES: {
    type: [imageSchema]
  },
  __SPECS: {
    type: String,
    index: true
  },
  __CATEGORIES: {
    type: [categorySchema]
  },
  __SELLERID: {
    type: Schema.Types.ObjectId
  },
  __CREATEDON: {
    type: Date
  },
  __UPDATEDON: {
    type: Date
  }
}, {
  collection: 'product_master'
});

const ProductModel = mongoose.model('productmodel', productSchema);

module.exports = ProductModel;