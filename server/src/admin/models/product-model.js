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
    type: String
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
    type: [priceSchema]
  },
  __IMAGES: {
    type: [imageSchema]
  },
  __SPECS: {
    type: String
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

module.exports = mongoose.model('productmodel', productSchema);