const express = require('express');
const router = express.Router();
const authorize = require('./../../middleware/auth');

const AdminController = require('../controller/admin.controller');
const CampaignsController = require('../controller/campaigns.controller');
const CategoriesController = require('../controller/categories.controller');
const ProductsController = require('../controller/products.controller');
const ReviewsController = require('../controller/reviews.controller');
const SellersController = require('../controller/sellers.controller');
const UsersController = require('../controller/users.controller');

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


// router.post('/addbulksellers', SellersController.addbulksellers);
// router.post('/addbulkproducts', ProductsController.addbulkproducts);
// router.post('/addbulkcategories', CategoriesController.addbulkcategories);
// router.post('/addbulkusers', UsersController.addbulkusers);

router.get('/getall-users', UsersController.getAllUsers);
router.get('/get-user/:id', UsersController.getuser);
router.post('/add-user', UsersController.adduser);
router.put('/update-user', UsersController.updateuser);
router.delete('/delete-user/:id', UsersController.deleteuser);

// getuser adduser updateuser deleteuser
module.exports = router;