/**
 * Created by tma on 3/18/14.
 */
var http = require('http');

var indicatorRoutes = function(app){
	app.get('/', function (req, res) {
		res.render(__dirname + '/view/indicator_view');
	});

	app.get('/washRooms', function (req, res) {
		res.render(__dirname + '/view/indicator_view');
	});

	app.get('/getIndicatorStatus', function (req, response) {

		var http = require('http');
		var querystring = require('querystring');
		var Buffer = require('buffer');

		var data = '';

		var options = {
			host: 'localhost',
			port: 8080,
			path: '/',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		};

		var req = http.request(options, function(res) {
			res.setEncoding('utf8');
			res.on('data', function (statusData) {
				console.log("body: " + statusData);
				response.write(statusData);
				response.end();
			});
		});

		req.end();

	});
};

module.exports = indicatorRoutes;