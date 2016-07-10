/**
 * Created by joelmiller on 10/13/15.
 */

var express = require('express');
var path = require('path');

var router = express.Router();

console.log('__dirname', __dirname);

router.get('/', function(request, response){
	response.sendFile(path.join(__dirname, '../server/public/views/index.html'));
});
//
//router.get('/login', function(request, response){
//	response.sendFile(path.join(__dirname, '../server/public/views/login.html'));
//});

module.exports = router;
