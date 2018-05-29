// Challenges Set A

// Challenge 1
// Create a function called subtractTwo that will accept a number, and return the number minus 2.

function subtractTwo(number) {
    return (typeof number === 'number') ? number - 2 : console.log('is not a number');
}

// The create a function called map that takes two inputs:

function map(arr, f) {
    for (let i = 0; i < arr.length; i++) arr[i] = f(arr[i]);
    return arr;
}

function multiplyByTwo(number) {
    return number * 2;
}

console.log(map([1, 2, 3, 4, 5], multiplyByTwo));

// an array of numbers (a list of numbers)
// a 'callback' function - this function is applied to each element of the array (inside of the function 'map')

// Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. 
// please do not use the native map or forEach method.

map([1, 2, 3, 4, 5], multiplyByTwo); //-> [2,4,6,8,10]
multiplyByTwo(1); //-> 2
multiplyByTwo(2); //-> 4

// Challenge 2 

// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
//  Please do not use the native forEach or map method.

function forEach(arr, f) {
    for (let i = 0; i < arr.length; i++) arr[i] = f(arr[i]);
}

var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function (char) {
    alphabet += char;
});
console.log(alphabet);   //prints 'abcd'


// Challenge 3
// In the first part of the extension, you're going to rebuild map as mapWith. 
//This time you're going to use forEach inside of mapWith instead of using a for loop.

function mapWith(arr, f) {
    forEach(arr, f)
    return arr;
}
console.log(mapWith([1, 2, 3, 4, 5], multiplyByTwo));

