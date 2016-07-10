/**
 * Created by joelmiller on 10/13/15.
 */

var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var index = require('../routes/index');
var company = require('../routes/company');
var bodyParser = require('body-parser');

var app = express();

var mongoURI = 'mongodb://localhost:27017/tuesday_example';

mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, './public')));
app.use('/', index);
app.use('/company', company);

var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Listening on port', port);
});