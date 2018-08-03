var m = require('../callBack');

process.on('message', function(msg) {
    if(msg.cmd=='double'){
        m.evendoubler(msg.data, function(err,results) {
            process.send({answer:results});
        })
    } else if(msg.cmd=='done') {
        process.exit();
    }
});