var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/blah', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:partial', function(req, res, next) {
  var partial = req.params.partial;
  console.log('they requested ' + req.params.partial+ ', what a chump')
  next();
});

//router.get('/:partial/:otherPartial', function(req, res, next) {
//   var partial = req.params.partial;
//   console.log('they requested ' + req.params.partial+ ', what a chump')
//   next();
// });

router.get('/*', function(req, res, next){
  res.redirect('/');
  // next();
});

//last page

//hold on to partial, call on page load

module.exports = router;
