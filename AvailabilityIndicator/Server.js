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
				var mode = 'Not Available'
				if(status == 'HIGH'){
					mode = 'Available';
				}
				response.write(mode);
				response.end();
			});
		});

	});

});

server.listen(8080);
console.log("Server is listening");
