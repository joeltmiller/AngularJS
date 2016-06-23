var express = require('express');
var index = require('./routes/index');
var app = express();

//Configs
app.use(express.static('server/public'));


//Routes
app.use('/', index);

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;

  console.log('Listening on port 3000');
})
