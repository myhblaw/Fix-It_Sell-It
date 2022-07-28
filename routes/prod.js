
// File Name: prod.js
// Author's Name: TEAM FIX-IT
// Web app name: SELL-IT
var express = require('express');
var router = express.Router();

let prodController = require('../controllers/prod');

// Helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    
    // ADD YOUR CODE HERE      
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();  

}

/* GET list of items */
router.get('/list', prodController.prodList);

// Route for Details
router.get('/details/:id', prodController.details);

// Routers for edit
router.get('/edit/:id',  prodController.displayEditPage);
router.post('/edit/:id',  prodController.processEditPage);

// Delete
router.get('/delete/:id', prodController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', prodController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', prodController.processAddPage);

module.exports = router;