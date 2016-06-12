var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/:partial', function(req, res, next) {
  var partial = req.params.partial;
  console.log('/' + partial + ' was attempted.')
  next();
});

router.get('/*', function(req, res, next){
  res.sendFile(path.join(__dirname, '../public/index.html'));
  // next();
});

//last page

//hold on to partial, call on page load

module.exports = router;
