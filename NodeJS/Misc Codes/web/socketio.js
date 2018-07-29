var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var handler = function(req,res) {
    fs.readFile(__dirname+'/index.html',function(err,data) {
        if(err) {
            res.writeHead(500);
            return res.end('Error loading doc');
        } else {
            res.writeHead(200);
            return res.end(data)
        }
    });
};

var app = http.createServer(handler);
var io = socketio.listen(app);

io.sockets.on('connection', function(socket) {
    setInterval(function() {
        var time = Date.now().toString();
        console.log('Emitted : '+time);
        socket.emit('timer', time);
    },2000);
    socket.on('submit', function(data) {
        console.log('Submitted :' +data);
    });
});

app.listen(8080);
console.log('Server running');

