var expect = chai.expect;

/** 
    De to første funksjonene du implementerer er kun for trening.
    Det er ikke meningen at man skal bruke dem direkte i neste oppgave.
*/

describe('basics', function() {

    describe('functionCreator()', function() {

        it('should return a function', function() {
            var result = functionCreator();
            expect(result).to.be.a('function');
        });

        it('should return a function that returns the argument to the creating function', function() {
            var newFunc = functionCreator('foobar');
            expect( newFunc() ).to.equal('foobar');
        });

    });

    describe('argumentsToArray', function() {
        it('should be a function', function() {
            expect(typeof argumentsToArray === 'function').to.equal(true);
        });

        it('should returns its arguments as a true array', function() {
            var result = argumentsToArray(1,2,3,4);
            expect(result).to.be.an('array');
            expect(result).to.eql([1,2,3,4]);
        });
    });
});

describe('memoize', function() {

    function fibonacci (n) {
        return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
    };

    it('should call the underlying function', function()  {
        var callCount = 0;
        function testFunc() { callCount++ }

        var newFunc = memoize(testFunc);
        newFunc();
        expect(callCount).to.equal(1);
    });

    it('should return the same result as the original function', function() {
        var cachedFib = memoize(fibonacci);
        expect(cachedFib(10)).to.equal(fibonacci(10));
    });

    it('should result in just one call for each unique argument', function() {
        var callCount = 0;
        function testFunc(n) { callCount++; return n; }
        var newFunc = memoize(testFunc);

        newFunc(13);
        newFunc(13);
        newFunc(13);
        newFunc(13);

        expect(callCount).to.equal(1);
    });

    it('should handle multiple arguments', function() {
        var callCount = 0;
        function add(a,b,c,d) { 
            callCount++; 
            return a+b+c+d; 
        }
        var cachedAdd = memoize(add);

        cachedAdd(1,2,3,4);
        cachedAdd(1,2,3,4);
        cachedAdd(1,2,3,4);
        cachedAdd(1,2,3,4);
        cachedAdd(1,2,3,4);
        expect(callCount).to.equal(1);
        expect(cachedAdd(1,2,3,4)).to.equal(add(1,2,3,4));
    });

});
