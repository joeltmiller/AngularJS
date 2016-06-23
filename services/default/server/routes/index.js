var router = require('express').Router();
var path = require('path');

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/getBook', function(req, res){
  var book = {};

  book.title = 'Infinite Jest';
  book.author = 'David Foster Wallace';
  book.released = 1996;

  res.send(book);

});

module.exports = router;
