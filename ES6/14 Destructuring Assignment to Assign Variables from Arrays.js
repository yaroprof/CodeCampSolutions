// ex1
/*
const [a,b] = [1,2,3,4,5]
console.log(a,b)
*/
// ex2
/*
const [a,b,,,c] = [1,2,3,4,5]
console.log(a,b,c)

 */

// task
// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.


let a = 8, b = 6;
// Only change code below this line
[a,b] = [b,a];
