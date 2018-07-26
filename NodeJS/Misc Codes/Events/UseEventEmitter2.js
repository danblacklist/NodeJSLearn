var pd = require('./EventEmitter2');

var r = new pd(7);

r.on('start', function(){
    console.log("I've started");
});

r.on('data', function(c){
    console.log("I've processed "+c);
});

r.on('stop', function(c){
    console.log("I'm Done processing "+c+" data elements");
});