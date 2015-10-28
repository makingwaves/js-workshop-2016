(function(global){

function add(a,b) { 
    return a+b;
}


function multiply(a,b){
   x = a * b;
    return x;
}

global.myLib = {
    add : add,
    multiply : multiply
}

})(window);
