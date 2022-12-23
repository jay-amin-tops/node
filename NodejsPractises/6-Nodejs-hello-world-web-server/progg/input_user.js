var http = require("http");  
const { parse } = require("path");
const { json } = require("stream/consumers");
var prompt = require("prompt");
prompt.start();
//const { parse } =require(Number);
http.createServer(function (request, response) {  
 // Send the HTTP header   
   // HTTP Status: 200 : OK  
   // Content Type: text/plain  
   response.writeHead(200, {'Content-Type': 'text/plain'});  
   // Send the response body as "Hello World"  
   prompt.get(['username', 'email'], function (err, result) {
    //
    // Log the results.
    // console.log('Command-line input received:');
    // console.log('  username: ' + result.username);
    // console.log('  email: ' + result.email);
    response.end('Username is :'+result.username + '\n' + 'email is :'+result.email);
    // response.end('email is :'+result.email);
    
  });
   
}).listen(8081);  
// Console will print the message  
console.log('Server running at http://127.0.0.1:8081/');
