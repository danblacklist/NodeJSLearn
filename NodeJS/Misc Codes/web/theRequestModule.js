var r = require('request');

//var r = request.defaults({'proxy':'http://672243:Stupify7@proxy.cognizant.com:6050'}) //Doesn't work due to SSL Certificates.
r.get('https://www.google.com', function(error, response, body){
    console.log(error);
    if(!error&&response.statusCode==200) {
        console.log(response.body);
    }
});