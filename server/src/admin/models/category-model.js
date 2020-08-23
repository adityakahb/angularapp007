// models/user-model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let c18 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  }
});

let c17 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c18]
  }
});

let c16 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c17]
  }
});

let c15 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c16]
  }
});

let c14 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c15]
  }
});

let c13 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c14]
  }
});

let c12 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c13]
  }
});

let c11 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c12]
  }
});

let c10 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c11]
  }
});

let c9 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c10]
  }
});

let c8 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c9]
  }
});

let c7 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c8]
  }
});

let c6 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c7]
  }
});

let c5 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c6]
  }
});

let c4 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c5]
  }
});

let c3 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c4]
  }
});

let c2 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c3]
  }
});

let c1 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: {
    type: [c2]
  }
});

let categorySchema = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c1],
}, {
  collection: 'category_master'
});

module.exports = mongoose.model('Category', categorySchema);