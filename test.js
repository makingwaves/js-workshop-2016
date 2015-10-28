describe('My Math Library', function() {
    var expect = chai.expect;

    describe('#add', function(){
        it('should add two numbers', function() {
            expect(myLib.add(1,2)).to.equal(3);
        });

        it('should be able to add a variable amount of numbers', function(){
           expect(myLib.add(1,2,3,4,5,15)).to.equal(30); 
        });
    });

    describe('#multiply', function(){
        it('should multiply two numbers', function() {
           expect(myLib.multiply(2,3)).to.equal(6); 
        });
    });

    it('should keep its privates to itself', function(){
        expect(typeof add).to.equal('undefined');
        expect(typeof multiply).to.equal('undefined');        
    });
});
