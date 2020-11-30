// EXAMPLES

// with - var
/*
var printNumTwo;
for(var i = 0; i < 3; i++){
    if (i === 2){
        var printNumTwo = function (){
            return i;
        }
    }
}
console.log(printNumTwo());   // 3

 */

// with - let
/*
let printNumTwo;

for (let i=0; i < 3; i++){
    if( i===2){
        printNumTwo = function (){
            return i;
        }
    }
}
console.log(printNumTwo());
console.log(i);  // error, i isnt dfined

 */

// TASK
// Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.

function checkScope(){
    let f = 'function scope';
    if (true){
        let i = 'block scope';
        console.log('block scope is: ', i);
    }
    console.log('function scope is ', f);
    return f;
}
checkScope();


























