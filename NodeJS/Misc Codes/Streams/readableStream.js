var request = require('request');

var s = request('https://app.pluralsight.com/library/');

s.on('data', (chunk) =>
{
    console.log("<<<<<DATA RECIEVED>>>>>");
    console.log(chunk);
});

s.on('end',()=>{
    console.log("<<<<<DONE>>>>>")
});

s.on('error',(err)=>{
    console.log(err.message);
});