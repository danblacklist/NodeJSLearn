var should = require ('should');
var m = require ('../callBack');

describe('EvendoublerTesting', function() {
    describe('Testing Sync functions', function() {
        it('should double even numbers', function() {
            m.evendoublersync(2).should.equal(4);
        });

        it.skip('Should throw error for odd number', function(done) {
            (function(){m.evendoublersync(3)}).should.throw(/Odd input/);
            done();
        });
    });

    describe('Testing async function', function() {
        it('should double even numbers', function(done){
            m.evendoubler(2, function(e,r){
                should.not.exist(e);
                r.should.equal(4);
                done();
            });
        });

        it('Should throw error for odd input', function(done){
            m.evendoubler(3, function(e,r){
                should.exist(e);
                should.not.exist(r);
                done();
            })
        })
    })
})