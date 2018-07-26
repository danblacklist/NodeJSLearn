var process = require('process');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
    process.stdout.write('DATA : '+chunk);
});

process.stdin.on('end', function(){
    process.stderr.write('ENDED!!!');
});