const http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end("Hello"); 

}).listen(3030,'127.0.0.1');

console.log("Server running");