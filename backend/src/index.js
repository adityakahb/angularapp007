var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

var app = express();

var CustomerRouter = require('./routes/customer.route');
var AdminRouter = require('./routes/admin.route');
var Config = require('./config');


mongoose.connect(Config.AppConfig.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log('db connected');
  }
})

app.use(cors());

app.use(express.json());

app.use('/auth-c', CustomerRouter);
app.use('/auth-a', AdminRouter);

app.get('/healthcheck', (req, res) => {
  res.send({
    'message': (new Date()).toUTCString() + ' ================Backend running successfully!=================='
  });
})

app.listen(Config.AppConfig.PORT, () => {
  console.log((new Date()).toUTCString() + ' server started');
})