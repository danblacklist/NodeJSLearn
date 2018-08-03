var http = require('http');
var cluster = require('cluster');

let numworkers = 2;

if(cluster.isMaster){
    for (var i=0;i<numworkers;i++){
        console.log('forking a new worker');
        cluster.fork();
    }

    cluster.on('fork', function(worker) {
        console.log('Master : Forked a new worker '+worker.id)
    });

    cluster.on('online', (worker)=> {
        console.log('Master : worker online '+worker.id);
    });

    cluster.on('listening', (worker,address)=>{
        console.log('master : worker '+worker.id+' listening at '+address.address+' port :'+address.port);
    })

    cluster.on('exit', function(worker,code,signal) {
        console.log('Master : Worker exiting :'+worker.id);
    })
} else {
    console.log('worker : #'+cluster.worker.id+' is ready !!');
    var c = 0;

    http.createServer(function(req,res) {
        res.writeHead(200);
        c++;
        console.log('incrementing worker#:'+cluster.worker.id+' request count to '+c);
        res.end('hello from worker#:'+cluster.worker.id+' pid:'+cluster.worker.process.pid);
        if(c==3)
        {
            cluster.worker.destroy();
        }
    }).listen(8000,'localhost');
}