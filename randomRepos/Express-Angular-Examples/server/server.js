var express = require('express');
var path = require('path');
var app = express();

var instructors = ["Millie", "Ryan", "Joel"];
var staff = ["Fred", "Mark", "Taylor"];

app.use(express.static('server/public'));

app.get('/', function(request, response){
  response.sendFile(__dirname + '/public/index.html');
});

app.get('/instructors', function(request, response){
  response.send(instructors);
});

app.get('/staff', function(request, response){
  response.send(staff);
});

var server = app.listen(3000, function(){
  var port = server.address().port
  console.log('Listening on port', port);
});
