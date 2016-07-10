var express = require('express');
var index = require('./routes/index');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('server/public'));

app.use('/', index);

var server = app.listen(5000, function(){
	var port = server.address().port;
	console.log('Listening on port', port);
});