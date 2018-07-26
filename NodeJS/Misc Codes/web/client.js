const http = require('http');

const options =
{
    host : 'www.google.com',
    path : '/',
    port : 80,
    method : 'GET'
};

console.log("attempting request to "+options.host);

var req = http.request('http://www.google.com/', function(response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.on('error', (e)=> {
    console.log(e.message+'|'+e.name+'|'+e.stack);
})

req.end();