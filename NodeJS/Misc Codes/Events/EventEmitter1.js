var ee = require('events').EventEmitter;

var processData = function(c){      //Publish subscribe architecture

    var e = new ee();
    process.nextTick( function(){
        var count = 0;
        e.emit('start');
        var t = setInterval( function(){
            e.emit('data',++count);
            if(count==c){
                e.emit('stop',c);
                clearInterval(t);
            }
        },Math.random()*1000);
    });
    return e;                       //almost as if it is returning multiple times
};

var r = processData(5);

r.on('start', function(){
    console.log("I've started");
});

r.on('data', function(c){
    console.log("I've processed "+c);
});

r.on('stop', function(c){
    console.log("Done processing "+c+" data elements");
});