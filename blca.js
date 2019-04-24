console.log('blca.js loaded');

(function(){ // ananymous wrapping to keep glocal scope clean for modular use

const blca={}

blca.created_at=Date()


if(typeof(define)!='undefined'){
    define(blca)
}else{
    window.blcaa=blca
}


})()