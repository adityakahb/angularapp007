const express = require('express');
const router = express.Router();
const authorize = require('./../../middleware/auth');

const AdminController = require('./../controller/admin.controller');
const { check, validationResult } = require('express-validator');

router.post('/register', [
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
], AdminController.register);

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
], AdminController.signin);

router.post('/addbulkproducts', AdminController.addbulkproducts);

// Get Users
router.get('/', AdminController.getallusers);

// Get Single User
router.get('/userprofile/:id', AdminController.getuser);

// Update User
router.put('/updateuser/:id', AdminController.updateuser);

// Delete User
router.delete('/delete-user/:id', AdminController.deleteuser);

module.exports = router;