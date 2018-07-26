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

module.exports.evendoubler = evendoubler; 