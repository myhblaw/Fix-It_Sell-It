
// File Name: index.js
// Author's Name: Aruna Ravi Kumar
// Student ID: 301243154
// Web app name: Car Applcation
exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('index', { 
        title: 'Sell-It',
        userName: req.user ? req.user.username : ''
    });
};