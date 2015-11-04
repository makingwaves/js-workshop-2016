function functionCreator(arg){
    return function() {
        return arg;
    }
}

function argumentsToArray(){
    var args = [].slice.call(arguments,0);
    return args;
}

/**
 * Function that "remembers" previous calls to save computation
 * @param {Function} fn a function
 */
function memoize(fn){
    var cache = {};

    return function(){
        var key = [].join.call(arguments);
        if(cache[key]) return cache[key];

        var res = fn.apply(null, arguments);
        cache[key] = res;
        return res;
    }
}
