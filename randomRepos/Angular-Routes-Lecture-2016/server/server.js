var express = require('express');

var app = express();

app.use(express.static('server/public'));

app.get('/', function(u, d){
  d.sendFile(__dirname + '/public/views/index.html');
})

app.listen(3000);
