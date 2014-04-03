/**
 * Created by tma on 3/18/14.
 */

$(document).ready(function () {

	setIndicatorStatus();
	console.log("Set status");

	function IndicatorViewModel() {
		var self = this;

		self.washRoomOne = ko.observable('undefined');
		self.getIndicatorStatus = function(){
			getIndicatorStatus();
		};

	}

	var ivm = new IndicatorViewModel();
	ko.applyBindings(ivm);

	function setIndicatorStatus() {
		setInterval(function () {
			getIndicatorStatus();
		} , 10000);
	}

	//Update the status in the web interface
	function getIndicatorStatus() {
		$.get('/getIndicatorStatus' , function (data , status) {
			console.log("Set status");
			ivm.washRoomOne(data);

		});

	}

});
