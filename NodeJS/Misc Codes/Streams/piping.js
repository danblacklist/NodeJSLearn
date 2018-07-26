var request = require('request');
var fs = require('fs');
var gz =require('zlib');

var s = request('https://app.pluralsight.com/');

s.pipe(fs.createWriteStream('ps3.html'));

s.pipe(gz.createGzip()).pipe(fs.createWriteStream('ps3.html.gz'));

//s.pipe(process.stdout); 