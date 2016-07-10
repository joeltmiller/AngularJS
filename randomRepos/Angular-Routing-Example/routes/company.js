/**
 * Created by joelmiller on 10/13/15.
 */
var express = require('express');
var Company = require('../models/Company');

var router = express.Router();


router.post('/add', function(request, response){
	var data = request.body;

	var newCompany = Company.create(data, function(err, savedCompany){
		if(err) throw err;
		console.log(savedCompany);
		console.log('Saved to MongoDB');
		//response.send(savedCompany);

		Company.find({}, function(err, companies){
			response.send(companies);
		});
	});


});

router.get('/get', function(request, response){
	Company.find({}, function(err, companies){
		if(err) throw err;
		response.send(companies);
	});
});

router.get('/findByName/:name?', function(request, response){
	console.log('request params', request.params);
	Company.findOne({ name : request.params.name }, function(err, company){
		if(err) throw err;
		response.send(company);
	});
});


module.exports = router;