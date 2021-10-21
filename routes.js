var express = require("express");

var router = express.Router();

router.get('/', function(req, res, next) {
    console.log("Hello I'm on the start page here.");
    res.render('index', {page:'Home', menuId:'home'});
  });
  
  router.get('/about', function(req, res, next) {
    res.render('about', {page:'About Us', menuId:'about'});
  });
router.post('/send', function(req,  res, next) {
  res.status(200);
  res.render('index_send', {myUserInput: req.body.userInput});
  console.log(req.body);
});


module.exports = router; // export variables
// 