/**
* Created by tma on 3/17/14.
*/

var boneScript = require('bonescript');
boneScript.pinMode('P8_19', boneScript.INPUT);
boneScript.pinMode('P8_13', boneScript.OUTPUT);

var checkSwitchStatus = function(callback){
	boneScript.digitalRead('P8_19', function(result){
		callback(result);
	});
} ;


var changeTheIndicatorStatus = function(status,callback){
	if(status == 'HIGH'){
		boneScript.digitalWrite('P8_13', boneScript.HIGH);
	}
	else{
		boneScript.digitalWrite('P8_13', boneScript.LOW);
	}

	callback();
};

exports.checkSwitchStatus = checkSwitchStatus;
exports.changeTheIndicatorStatus = changeTheIndicatorStatus;



