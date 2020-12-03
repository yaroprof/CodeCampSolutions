
// 1ex.
const greeting = (name = " Anonymous") => "Hello " + name;

console.log(greeting(' Petro'));


// task

// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

// Only change code below this line
const increment = (number, value = 1) => number + value;

console.log(increment(5, 2));
console.log(increment(5))
// Only change code above this line
