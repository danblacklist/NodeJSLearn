const math = require('../callBack');
const assert = require('assert');

assert.equal(math.evendoublersync(2),4);
assert.throws(function() {
    math.evendoublersync(3);
},/Odd/);                                   //Regular expression to look for word odd in error message

math.evendoubler(4, function(error,result) {
    assert.ifError(error);
    assert.equal(result,8,'Failed on even number');
});

math.evendoubler(3, function(err,result){
    assert.notEqual(err,null);
})