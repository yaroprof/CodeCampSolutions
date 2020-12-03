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
/*
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

 */



// 01ex.
/*
// let x = 10;   // 1: 10
var func1 = function(){
    console.log('1: ' + x);
}
func1();

// let x = 10;  // ReferenceError

var x = 10;  // 1: undefined - hosting but undefined

 */

// 02ex.

/*
var func2 = function (){
    for(var i = 1; i<5; i++){
        console.log(i)   // 12345
    }
    console.log(i)  // 5
}
func2();

 */
























