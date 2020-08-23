const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

// "__NAME": "Porta molestie",
//     "__URL": "#",
//     "__JOINED": "Sun, 19 Nov 2017 00:05:46 GMT",
//     "__PROFILEPIC": "https://via.placeholder.com/525x347/c42b8e/c24ea1",
//     "__STATUSID": "5f40cf6afa1cc71544c49c1d",
//     "__PRODUCTS": [
//       {
//         "__NAME": "Posuere sollicitudin magnis Venenatis velit Nisl maximus Montes etiam maximus dolor Volutpat finibus",
//         "__URL": "#",
//         "__STATUSID": "5f40cf6afa1cc71544c49c1f",
//         "__ISOUTOFSTOCK": false
//       }

let emailSchema = new Schema({
  __ADDRESS: {
    type: String
  },
  __ISPRIMARY: {
    type: Boolean
  }
});

let productSchema = new Schema({
  __NAME: {
    type: String
  },
  __URL: {
    type: String
  },
  __STATUSID: {
    type: Schema.ObjectId
  },
  __ISOUTOFSTOCK: {
    type: Boolean
  }
});

let sellerSchema = new Schema({
  __NAME: {
    type: String
  },
  __URL: {
    type: String
  },
  __JOINED: {
    type: Date
  },
  __EMAIL: {
    type: [emailSchema]
  },
  __PROFILEPIC: {
    type: String
  },
  __STATUSID: {
    type: Schema.ObjectId
  },
  __PRODUCTS: {
    type: [productSchema]
  }
}, {
  collection: 'seller_master'
});

module.exports = mongoose.model('Seller', sellerSchema);