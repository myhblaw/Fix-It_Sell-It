
// File Name: index.js
// Author's Name: TEAM FIX-IT
// Web app name: SELL-IT
exports.home = function(req, res, next) {
    console.log('===> Original URL: ' + req.session.url);
    res.render('index', { 
        title: 'Sell-It',
        userName: req.user ? req.user.username : ''
    });
};