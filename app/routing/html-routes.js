
module.exports = function(app, path) { 

// Routes

	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
	app.get('/tables', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/tables.html'));
	});
	app.get('/reserve', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/reserve.html'));
	});
	app.get('/js/:jsName', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/js/'+req.params.jsName));
	});

	app.get('/css/:cssName', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/css/'+req.params.cssName));
	});

}