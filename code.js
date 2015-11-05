/**
 * Create a new function 
 *
 * @arg {*} the argument that the new function will return
 * @returns {Function} a new function
 */
function functionCreator(arg){
    return function() {
        return arg;
    }
}

/**
 * Get the individual arguments as an array
 *
 * @returns [] the arguments converted to an array
 */
function argumentsToArray(){
    return [].slice.call(arguments);
}

/**
 * Function that "remembers" previous calls to save computation
 * Yes, we are talking about caching.
 *
 * @param {Function} fn a function
 */
function memoize(fn){
    var cache = {};

    return function(){
        /* 
         * Convert the arguments array to  a true array.
         * As the function is expecting multiple arguments, we need
         * to apply our list of arguments to the function to be able to utilize it
         */
        var args = argumentsToArray.apply(null,arguments);
        // Convert the argument array to a string - this only works with a true array
        var key = args.join();

        if(cache[key]) return cache[key];

        var res = fn.apply(null, args);
        cache[key] = res;
        return res;
    }
}
