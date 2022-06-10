function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return function newFunction(){

    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}