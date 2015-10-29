var expect = chai.expect;

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
