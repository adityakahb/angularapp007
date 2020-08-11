const express = require('express');
const router = express.Router();
const authorize = require('./../../middleware/auth');

const UserController = require('./../controller/user.controller');
const { check, validationResult } = require('express-validator');

router.post('/registeruser', [
  check('__FIRSTNAME', 'First name is required')
    .not()
    .isEmpty(),
  check('__LASTNAME', 'Last name is required')
    .not()
    .isEmpty(),
  check('__EMAIL', 'Email is required')
    .not()
    .isEmpty(),
  check('__PASSWORD', 'Password should be between 5 to 8 characters long')
    .not()
    .isEmpty()
    .isLength({
      min: 8
    })
], UserController.registeruser);

router.post('/signin', [
  check('__EMAIL', 'Email is required')
    .not()
    .isEmpty(),
  check('__PASSWORD', 'Invalid Password')
    .not()
    .isEmpty()
    .isLength({
      min: 5,
      max: 8
    })
], UserController.signin);

// Get Users
router.get('/', UserController.getallusers);

// Get Single User
router.get('/userprofile/:id', UserController.getuser);

// Update User
router.put('/updateuser/:id', UserController.updateuser);

// Delete User
router.delete('/delete-user/:id', UserController.deleteuser);

module.exports = router;