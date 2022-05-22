const words =['hello ', 'world', 'welcome'];
console.log(words);
// empty array
const myList =[ ];
// array of numbers
const numberArray = [2, 4, 6, 8];
// array of strings
const stringArray = ['eat', 'fish', 'work', 'sleep'];
const newData =['work', 'exercise', 'true' ];

console.log(myList);
console.log(numberArray);
console.log(stringArray);
console.log(newData);

// you can also store arrays, functions and other objects inside an array.
const newData1 = [
    {'task1': 'exercise'},
    [1, 2, 3],
    function hello() {console.log('hello')}
]
console.log(newData1);

// access elements of an array
const myArray = ['h','e','l', 'l', 'o'];
console.log(myArray[0]);
console.log(myArray[1]);

//Add an ELment to an Array
// push() method adds an element at the end of the array.
let dailyActivities = ['eat', 'sleep',];
// add an element at the end
dailyActivities.push('exercise');
console.log(dailyActivities);

// while unshift() method adds an element at the beginning of the array.
// add an element at the start
dailyActivities.unshift('work');
console.log(dailyActivities);
// remove the last element from 
let dailyActivities1 = ['work', 'eat', 'sleep', 'exercise'];
// the last element, The pop() method is use to remove an element of array
dailyActivities1.pop();
console.log(dailyActivities1);
// remove the last element
const removedElement = dailyActivities1.pop();
console.log(removedElement);
console.log(dailyActivities1);

// remove the first element we use shift() method
let dailyActivities3 = ['work','eat','sleep'];
// remove the first element 
dailyActivities3.shift();
console.log(dailyActivities3);
// Array Length
let dailyActivities4= ['work','eat','sleep'];
console.log(dailyActivities4.length);
