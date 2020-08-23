// models/user-model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let settingsSchema = new Schema({

}, { _id : false });

let stateSchema = new Schema({
  __NAME: {
    type: String
  },
  __REFERENCEID: {
    type: Schema.Types.ObjectId
  }
});

let orderSchema = new Schema({
  __ORDERID: {
    type: Schema.Types.ObjectId
  },
  __ORDERSTATUSID: {
    type: Schema.Types.ObjectId
  },
  __ORDERDATE: {
    type: Date
  }
}, { _id : false });

let cardSchema = new Schema({
  __CARDNUMBER: {
    type: String
  }
}, { _id : false });

let addressSchema = new Schema({
  __NAME: {
    type: String
  },
  __COUNTRYID: {
    type: Schema.Types.ObjectId
  },
  __FULLNAME: {
    type: String
  },
  __MOBILENUMBER: {
    type: Number
  },
  __PINCODE: {
    type: String
  },
  __APARTMENT: {
    type: String
  },
  __AREA: {
    type: String
  },
  __LANDMARK: {
    type: String
  },
  __CITY: {
    type: String
  },
  __STATE: stateSchema,
  __ADDITIONALINFO: {
    type: String
  },
  __SAVEDCARDS: [cardSchema],
  __ISBILLINGADDRESS: {
    type: Boolean
  }
}, { _id : false });

let emailSchema = new Schema({
  __ADDRESS: {
    type: String
  },
  __ISPRIMARY: {
    type: Boolean
  }
},{ _id : false });

let userSchema = new Schema({
  __PUBLICNAME: {
    type: String
  },
  __FIRSTNAME: {
    type: String
  },
  __MIDDLENAME: {
    type: String
  },
  __LASTNAME: {
    type: String
  },
  __PROFILEPIC: {
    type: String
  },
  __BIO: {
    type: String
  },
  __EMAIL: [emailSchema],
  __DATEOFBIRTH: {
    type: Date
  },
  __ADDRESSES: [addressSchema],
  __SETTINGS: settingsSchema,
  __JOINED: {
    type: Date
  },
  __UPDATED: {
    type: Date
  },
  __ORDERS: [orderSchema],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
}, {
  collection: 'user_master'
});

module.exports = mongoose.model('User', userSchema);