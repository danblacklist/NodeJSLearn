var os = require('os');

var toMb = function(f) {
    return Math.round((f/1024/1024));
}

console.log('Host: ' +os.hostname);
console.log('Load Average: '+os.loadavg()[1]);
console.log(toMb(os.freemem())+ ' Mb of ' +toMb(os.totalmem)+' Mb free');
console.log("Time : "+os.constants)