var express = require('express');
var app = express();

app.use(express.static('server/public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/thing', function(req, res){
	res.send({key: 'value'});
});

var server = app.listen(3000);