const fs = require('fs');
const http = require('http');

http.createServer((req,res) => {
    res.writeHead('200', { 'Content-Type': 'text/plain'});
    if(req.url=='/file.txt') {
        fs.createReadStream(__dirname+'/file.txt').pipe(res);
    }else {
        res.end('Server up and running');
    }
}).listen(3930,'127.0.0.1').on('error',(e)=> {
    console.log(e.message);
    });