/**
 * Created by tma on 3/17/14.
 */

var http = require("http");
var availabilityHandler = require("./lib/availabilityHandler.js");

var data = '';

var server = http.createServer(function(request, response) {

	request.on('end', function () {

		availabilityHandler.checkSwitchStatus(function(status){
			availabilityHandler.changeTheIndicatorStatus(status,function(){
				if(status == 'HIGH'){
					response.write('Available');
				} else {
					response.write('Not Available');
				}
				response.end();
			});
		});

	});

});

server.listen(8080);
console.log("Server is listening");
