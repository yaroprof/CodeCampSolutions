// 1ex
/*
const person = {
    name: 'Yaroslav',
    age: 41
};

const greeting = `Hello, my name is ${ person.name }!
    I am ${ person.age };
`

console.log(greeting);

 */

// task
// Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr){
    const failureItems = [];

    for (let i = 0; i < arr.length; i++){
        failureItems.push(`<li class="text-warning" > ${arr[i]} </li>`)
    }

    return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList);


























