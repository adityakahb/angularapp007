// models/user-model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let c21 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c20 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c21],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c19 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c20],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c18 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c19],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c17 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c18],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c16 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c17],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c15 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c16],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c14 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c15],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c13 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c14],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c12 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c13],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c11 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c12],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c10 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c11],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c9 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c10],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c8 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c9],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c7 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c8],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c6 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c7],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c5 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c6],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c4 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c5],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c3 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c4],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c2 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c3],
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
});

let c1 = new Schema({
  __L: {
    type: Number
  },
  __C: {
    type: String
  },
  __S: [c2],
  __STATUSID: {
    type: Schema.Types.ObjectId
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
  __STATUSID: {
    type: Schema.Types.ObjectId
  }
}, {
  collection: 'category_master'
});

module.exports = mongoose.model('Category', categorySchema);