
// File Name: users.js
// Author's Name: Aruna Ravi Kumar
// Student ID: 301243154
// Web app name: Car Applcation
let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');
let passport = require('passport');

// Routes for sign-up
router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

// Routes for sign-in
router.get('/signin', usersController.renderSignin);
router.post('/signin', usersController.signin);

// Route for sign-out
router.get('/signout', usersController.signout);

module.exports = router;
