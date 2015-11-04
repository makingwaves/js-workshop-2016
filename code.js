function functionCreator(){
    /** fill me in, buddy */
    return;
}

/**
 * Function that "remembers" previous calls to save computation
 * @param {Function} fn a function
 */
function memoize(fn){
    var cache = {};

    return function(a){
        var res = fn(a);
        cache[a] = res;
        return res;
    }
}
