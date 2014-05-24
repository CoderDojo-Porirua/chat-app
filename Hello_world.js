var http = require('http');
var  url = require('url')
var sever = http.createServer(function (request, response) {
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
	response.writeHead(200, {'Content-Type': 'text/plain'});
	console.log('Requested : ' + query.name + query.country + '.');
	response.end('Hello ' + query.name +', ' +'from' +',  ' + query.country + '.\n');
} );
console.log('your server is running')
sever.listen(8000);