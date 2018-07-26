var fs = require('fs')

if(fs.existsSync('temp')){
    console.log('Temp exists, removing it');
    if(fs.existsSync('temp/new.txt')) {
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

fs.mkdir('temp', function(err) {                                                    //Execute callback after mkdir completes
    fs.exists('temp', function(exists) {                                            //execute callback after exists completes
    if(exists) {
        process.chdir('temp')                                                       //this changes the process' PWD it's probably synchronous
            fs.writeFile('test.txt','A test file with test text', function(err) {   //Execute callback after writefile completes
                fs.rename('test.txt','new.txt', function(err) {                     //so on and so forth
                    fs.stat('new.txt', function(err,stats) {
                        console.log('file has size : '+stats.size+' bytes');
                        fs.readFile('new.txt', function(err,data) {
                            console.log('Contents :'+data.toString());
                        });
                    });

            });
        });
    }
});
});
