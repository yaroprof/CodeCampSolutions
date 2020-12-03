// 01ex
/*
const user ={
    johnDoe:{
        age: 33,
        email: 'john@codecamp.com'
    }
};

const { johnDoe: {age,email}} = user;
console.log();

 */


//02 ex
/*
const user = {
    johnDoe:{
        age: 33,
        email: 'john@codecamp.com'
    }
};

const {  johnDoe:{userAge, userEmail} } = user;

 */

// Task
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.


const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const { today:{ low:lowToday, high:highToday }} = LOCAL_FORECAST;

// Only change code above this line














