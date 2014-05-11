Installation 
============

Windows
=======

- Install Node from http://nodejs.org/
- Download msi, and run, follow steps clicking Next.
- Click Finish, Node is installed.
- Start NodeJS

MacOS
=====

-

Linux
=====

Steps
=====


Hello World
============

Step 1
------
Hello World to console

index.js

````
	console.log("Hello World");
````

````
> node index.js
````

Output:
````
Hello World
````

Step 2
=======

Hello World to web page

````
	// Load the http module to create an http server.
	var http = require('http');

	// Configure our HTTP server to respond with Hello World to all requests.
	var server = http.createServer(function (request, response) {
	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.end("Hello World\n");
	});

	// Listen on port 8000, IP defaults to 127.0.0.1
	server.listen(8000);

	// Put a friendly message on the terminal
	console.log("Server running at http://127.0.0.1:8000/");
````

Browse to localhost:8000

````
 Web    Address  Port 
<-----><-------> <---> 
http://localhost:8000/
````
Step 3
======

Passing variables
-----------------

Browse to http://localhost:8000/?name=Bob

````
 Web    Address  Port Parameters
<-----><-------> <--> <------->
http://localhost:8000/?name=Bob
````

Multiple variables
-------------------

````
 Web    Address  Port Parameters
<-----><-------> <--> <-----------------------------> 
http://localhost:8000/?name=Bob&country=New%20Zealand

name    = Bob
country = New Zealand
````