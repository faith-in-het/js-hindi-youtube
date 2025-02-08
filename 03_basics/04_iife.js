// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
//second bracket is executing the function

//why we are using IIFE : to reduce global scope pollution back in the days we were using var as a keyword and it was creating lot of issues so this is one of the solutions 
//using le and const also a solution 
