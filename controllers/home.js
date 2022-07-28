
module.exports.homelist = function(req, res, next) {  
   
    res.render('home', { 
        title: 'Sell-It',
        userName: req.user ? req.user.username : ''
    })           
     
}
