var http = require("http");  
http.createServer(function (request, response) {  
 // Send the HTTP header   
   // HTTP Status: 200 : OK  
   // Content Type: text/plain  
   response.writeHead(200, {'Content-Type': 'text/html'});  
   // Send the response body as "Hello World"  
//    response.end("<p>Hello i am just testing text</p>\n");

response.end("<h1>Contact with us</h1>\n <p>Hi i just test for multiple html elements</p>\n");

}).listen(8081);  
// Console will print the message  
console.log('Server running at http://127.0.0.1:8081/');
