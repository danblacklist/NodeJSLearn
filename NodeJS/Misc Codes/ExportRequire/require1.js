var doubler = require('./export1');

var processResults = function(err, results, time) {
    if (err) {
        console.log("ERROR: " + err.message +" "+ time+" ms");
    } else {
        console.log("The results are: " + results + " (" + time + " ms)");
    }
};

console.log(doubler.evendoubler(2,processResults));
