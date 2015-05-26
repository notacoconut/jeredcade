/**
 * do something with the user model
 * var User = require('../models/user');
 */

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
	var pg = require('pg');
	console.log(process.env.DATABASE_URL);
	pg.connect(process.env.DATABASE_URL, function(err, client) {
		console.log(err,client);
  	//var query = client.query('SELECT * FROM your_table');
  		//query.on('row', function(row) {
    	//console.log(JSON.stringify(row));
  	});

	res.status(200).end();
};
