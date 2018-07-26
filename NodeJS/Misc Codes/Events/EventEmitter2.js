var util = require('util');
var ee =require('events').EventEmitter;

var processData = function(c){      //Publish subscribe architecture

    var e = this;                   //Because processData() is doing the emitting after inheriting EventEmitter
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

util.inherits(processData, ee);     //Inherit EventEmitter
module.exports = processData;