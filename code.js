/**
 * By having a direct reference to the slice function of the Array 
 * prototype object we get some speedups
 *
 * 1. We don't need to travel up the prototype chain when referencing the function
 * 2. By directly referencing the prototype we avoid having to create a new object each time
 */
var slice = Array.prototype.slice;

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
 * 
 * @example
 * argumentsToArray(1,2,3,4) // => [1,2,3,4];
 */
function argumentsToArray(){
    return slice.call(arguments);
}


/**
 * Copy the individual elements of an array-like object into a new array
 *
 * @param myArray the array (or array-like object)
 * @returns a new array
 * 
 * @example
 * var arr1 = [1,2,3,4];
 * var arr2 = argumentsToArray(arr1)
 * arr1 !== arr2 // ==> true
 */
function copyArrayLikeObject(myArray){
    // usually one would use something like the 'check-types' library to do this
    if(!myArray.hasOwnProperty('length') ) {
        throw new TypeError('We do not know how to handle this object');
    }
    return slice.call(myArray);
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
        var args = copyArrayLikeObject(arguments);
        // Convert the argument array to a string - this only works with a true array
        var key = args.join();

        if(cache[key]) return cache[key];

        var res = fn.apply(null, args);
        cache[key] = res;
        return res;
    }
}
