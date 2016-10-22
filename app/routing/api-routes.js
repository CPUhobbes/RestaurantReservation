var uuid = require('uuid');

module.exports = function(app) { 

// Routes

	//People arrays
	var waitlist =[];
	var tables = [];

	//Sends back arrays
	app.get('/api/waitlist', function (req, res) {
		res.json(waitlist);
	});
	app.get('/api/tables', function (req, res) {
		res.json(tables);
	});

	//If resevation is made put into correct arrays
	app.post('/api/reserve', function (req, res) {
		var newReserve = req.body;
		if(tables.length<5){
			newReserve.ID = uuid.v1(); //adds uuid to array, then adds to main arrays
			tables.push(newReserve); 
			res.send("You are Booked");

		}
		else{
			waitlist.push(newReserve);
			res.send("Sorry, you are on the waitlist");
		}
	});

	//Clear arrays
	app.post('/api/clear', function (req, res) {
		waitlist =[];
		tables = [];
		res.send("Cleared Tables");
	});

	

}