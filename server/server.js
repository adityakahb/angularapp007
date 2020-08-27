const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./src/database/db');
const express = require('express');
const mongoose = require('mongoose');

// Express APIs
const adminapi = require('./src/admin/route/admin.route');
const authapi = require('./src/user/route/user.route');
const searchapi = require('./src/search/route/search.route');

// MongoDB conection
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
    console.log('====Database connected====')
  },
  error => {
    console.log('====Database can\'t be connected====: ' + error)
  }
)

// Remvoe MongoDB warning error
mongoose.set('useCreateIndex', true);


// Express settings
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// Serve static resources
app.use('/public', express.static('public'));

app.use('/adminapi', adminapi);
app.use('/authapi', authapi);
app.use('/searchapi', searchapi);

// Define PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`====Started SERVER on port ${port}====`);
})

// Express error handling
app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error('====Something went wrong===='));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  res.status(err.statusCode).send(err.message);
});