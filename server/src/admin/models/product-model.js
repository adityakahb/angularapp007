const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StatusSchema = new Schema({
  __STATUS: {
    type: String
  },
  __DATE: {
    type: Date
  }
});

let ImageSchema = new Schema({
  __URL: {
    type: String
  },
  __ZOOMURL: {
    type: String
  }
});

let VideoSchema = new Schema({
  __TYPE: {
    type: String
  },
  __URL: {
    type: String
  }
});

let SellerSchema = new Schema({
  __NAME: {
    type: String
  },
  __URL: {
    type: String
  }
});

let ColorSchema = new Schema({
  __COLORHEX: {
    type: String
  },
  __NAME: {
    type: String
  },
  __URL: {
    type: String
  }
});

let CategorySchema = new Schema({
  __TYPE: {
    type: String
  },
  __URL: {
    type: String
  }
});

let PriceSchema = new Schema({
  __MAJOR: {
    type: String
  },
  __MINOR: {
    type: String
  },
  __CURRENCY: {
    type: String
  },
  __TYPE: {
    type: String
  }
});

let productSchema = new Schema({
  __CATEGORY: {
    type: CategorySchema
  },
  __COLOR: {
    type: ColorSchema
  },
  __IMAGES: {
    type: [ImageSchema]
  },
  __NAME: {
    type: String
  },
  __PRICE: {
    type: [PriceSchema]
  },
  __SELLER: {
    type: SellerSchema
  },
  __SPECS: {
    type: String
  },
  __URL: {
    type: String
  },
  __VIDEO: {
    type: VideoSchema
  },
  __QUANTITY: {
    type: Number
  },
  __STATUS: {
    type: [StatusSchema]
  },
  __REVIEWS: {
    type: [String]
  }
}, {
  collection: 'product_master'
});

module.exports = mongoose.model('productmodel', productSchema);