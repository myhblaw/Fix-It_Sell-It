
// File Name: prod.js
// Author's Name: Aruna Ravi Kumar
// Student ID: 301243154
// Web app name: prod Applcation
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
router.get('/edit/:id', requireAuth, prodController.displayEditPage);
router.post('/edit/:id', requireAuth, prodController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, prodController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, prodController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, prodController.processAddPage);

module.exports = router;