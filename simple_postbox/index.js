// Load the http module to create an http server.
var http = require('http');
var url = require('url');

// Array to hold messages
var messages = [];

// Configure our HTTP server to act as a simple mailbox
var server = http.createServer(function (request, response) {

  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;

  var action = query.action;

  // Example usage: http://<hostname>:8000/?action=post&from=Kermit&to=Fozzie&message=It%27s%20not%20easy%20being%20green
  if( action == 'post') {

    // Create a message from the request and store it in the 'postbox'
    // TODO - Add some request validation
    var message = { from:query.from, to:query.to, message:query.message};
    messages[messages.length] = message;

    response.writeHead(201, {"Content-Type": "text/plain"});
    response.end("Message received! :-)\n");

  }
  else if( action == 'get') {

    if( messages.length > 0) {

      // Return the contents of the 'postbox'
      response.writeHead(200, {"Content-Type": "application/json"});
      response.end(JSON.stringify(messages));

    }
    else {

      // Error, no messages
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.end("No messages for you :-(");

    }

  }
  else {

    // Error, bad action
    response.writeHead(405, {"Content-Type": "text/plain"});
    response.end("Valid actions are 'post' and 'get'\n");

  }


});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
