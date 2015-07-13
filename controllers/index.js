/**
 * do something with the user model
 * var User = require('../models/user');
 */

 var pg = require('pg');

exports.index = function (req, res) {
  res.render('index', {
    title: 'jeredcade'
  });

};


exports.subscribe = function (req, res) {

	var email = req.body.email;
	if(email.indexOf('@') == -1){
		res.status(400).send('Bad Request');

	}
	

	console.log("connecting to db @: " + process.env.DATABASE_URL);
	pg.connect(process.env.DATABASE_URL, function(err, client) {
	
		//todo: add error handling!
		//console.log(err,client);

		var qtext = 'insert into subscriptions (email_address) values (\'' + email + '\');';
  	    var query = client.query(qtext, function(error, result){

  	    	console.log(error, result);

  	    });
  		
  		//query.on('row', function(row) {
    	//	console.log(JSON.stringify(row));
		//});

  	});
	

	res.status(200).end();
};
