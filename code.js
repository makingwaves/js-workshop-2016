(function(global){

function add(a,b,c,n) { 
    var res=0;
    
    for(var i=0; i< arguments.length; i++) 
        res+=arguments[i];

    return res;
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
