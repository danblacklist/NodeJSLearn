var exec = require('child_process').exec,
    spawn = require('child_process').spawn,
    fork = require('child_process').fork;
    ps = spawn('ps',['ax']),
    grep = spawn('grep',['npode']);

var child = exec('whoami /FQDN', function(err,stdout,stderr){
    if(err){
        console.log('Error:'+err);
    }else{
        console.log('output is :'+stdout);
    }
});
console.log('PID IS :'+child.pid);

console.log('----------------');

ps.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);

ps.stderr.on('data', function(data) {
    console.log('ps error :'+data);
})

grep.stderr.on('data', function(data) {
    console.log('grep error :'+data);
})

console.log('-----------------------------------');

var child = fork(__dirname + '/honor.js');

child.on('message', function(message) {
    console.log('Hello from child and some message'+message.answer);
    child.send({cmd:'done'})
})
 child.send({cmd:'double',data:20});
