const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');
// const router = express.Router();
const adminSchema = require('./../models/admin-model');
const authSchema = require('./../models/auth-model');
const { check, validationResult } = require('express-validator');

// Register
exports.register = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    bcrypt.hash(req.body.__PASSWORD, 10).then((hash) => {
      const admin = new adminSchema({
        __FIRSTNAME: req.body.__FIRSTNAME,
        __MIDDLENAME: req.body.__MIDDLENAME,
        __LASTNAME: req.body.__LASTNAME,
        __EMAIL: req.body.__EMAIL
      });
      const auth = new authSchema({
        __EMAIL: req.body.__EMAIL,
        __PASSWORD: hash
      });
      admin.save().then((response) => {
        auth.save().then((a_response) => {
          // res.status(201).json({
          //   message: 'Auth for the user successfully created!',
          //   result: a_response
          // });
          res.status(201).json({
            message: 'Admin successfully created!',
            result: response
          });
        }).catch(a_error => {
          res.status(500).json({
            error: a_error
          });
        });
      }).catch(error => {
        res.status(500).json({
          error: error
        });
      });
    });
  }
};

// Sign-in
exports.signin = (req, res, next) => {
  let getUser;
  authSchema.findOne({
    __EMAIL: req.body.__EMAIL
  }).then(user => {
    if (!user) {
      return res.status(200).json({
        status: 401,
        message: 'Authentication failed'
      });
    }
    getUser = user;
    return bcrypt.compare(req.body.__PASSWORD, user.__PASSWORD);
  }).then(response => {
    if (!response) {
      return res.status(200).json({
        status: 401,
        message: 'Authentication failed'
      });
    }
    let jwtToken = jwt.sign({
      email: getUser.__EMAIL,
      userId: getUser._id
    }, 'longer-secret-is-better', {
      expiresIn: '1h'
    });
    res.status(200).json({
      status: 200,
      token: jwtToken,
      expiresIn: 3600,
      _id: getUser._id
    });
  }).catch(err => {
    return res.status(200).json({
      status: 401,
      message: 'Authentication failed'
    });
  });
};


// Get Users
exports.getallusers = (req, res) => {
  userSchema.find((error, response) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json(response)
    }
  })
};

// Get Single User
exports.getuser = (req, res, next) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
};

// Update User
exports.updateuser = (req, res, next) => {
  userSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('User successfully updated!')
    }
  })
};


// Delete User
exports.deleteuser = (req, res, next) => {
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
};