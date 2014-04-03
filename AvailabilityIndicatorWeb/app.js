var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var express_handlebars = require('express3-handlebars');

var app = express();

// all environments
app.set('port', process.env.PORT || 8081);

var hbs = express_handlebars.create({
	defaultLayout: 'main',  //path to main layout file
	partialsDir: [
		'views/partials/'
	]
});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));


app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use("/public",express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

require(__dirname + '/app/indicator/indicator_routes')(app);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
