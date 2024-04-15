var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({ message: 'Welcome to the YouYongBa Mock API' });
});

module.exports = router;
