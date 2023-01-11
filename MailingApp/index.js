//connects index.js to frameworks and SQL database
var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

var connection = mysql.createConnection({
	host 	 : 'localhost',
	user 	 : 'root',
	database : 'mailing_list'
});

app.listen(3000, function() {
	console.log('App listening on port 3000!');
});

//setting up routes using express
app.get("/", function(request, response){
	//counts users using node
	connection.query('SELECT COUNT(*) AS count FROM users', function (error, results, fields) {
		if (error) throw error;
	//sends response with express to ejs file
	var count = results[0].count;
	response.render("home", {count: count});
	});
});

//transfers data from user input into sql database using node,
//bodyparser and nodeJS
//redirects user to thankyou page
app.post("/thankyou", function(request, response){
	var person = { 
	full_name: request.body.full_name,
	email: request.body.email,
	comment_text: request.body.comment_text
	};
	
	connection.query('INSERT INTO users SET ?', person, function(error, result){
		if(error) throw error; 
		console.log(result);
	});
	connection.query('SELECT full_name AS userName FROM users ORDER BY created_at DESC', function (error, results, fields) {
		if (error) throw error;
	//sends response with express to ejs file
	var userName = results[0].userName;
	response.render("thankyou", {userName: userName});
	});
});
