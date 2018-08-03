var maxTime=1000;

var evendoubler = function(v, callback){
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2) {
        setTimeout(function() {
            callback(new Error("Odd input"), null, waitTime);
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};

let evendoublersync = function (v) {
    if (v%2) {
        throw (new Error("Odd input"));
    } else {
        return v*2;
    }
};

// var processResults = function(err, results, time) {
//     if (err) {
//         console.log("ERROR: " + err.message +" "+ time+" ms");
//     } else {
//         console.log("The results are: " + results + " (" + time + " ms)");
//     }
// };

count=0;

for(var i=0;i<10;i++){
    console.log("calling "+i+"th time");
    evendoubler(i,function(err, results, time){                 //callback
        if (err) {
        console.log("ERROR: " + err.message +" "+ time+" ms");
    } else {
        console.log("The results are: " + results + " (" + time + " ms)");
    }
    if(++count==10)
console.log("Done !!!");
})
};
console.log("-----");

module.exports.evendoubler = evendoubler;
module.exports.evendoublersync = evendoublersync;

