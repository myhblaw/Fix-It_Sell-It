
// File Name: index.js
// Author's Name: TEAM FIX-IT
// Web app name: SELL-IT
var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
