// Challenge 9
// Create a function majority that accepts an array and a callback. 
// The callback will return either true or false. majority will iterate through the array and perform the 
// callback on each element until it can be determined if the majority of the return values from the 
// callback are true. If the number of true returns is equal to the number of false returns, 
// majority should return false.

const lessThan = 5;

var majority = function (arr, f) {
    let amount_true = 0; i = -1;
    while (++i < arr.length && amount_true < arr.length / 2) if (f(arr[i], lessThan)) amount_true++;
    return (amount_true > arr.length / 2) ? true : false;
}

var lessThanNumber = function (value, number) {
    return value < number;
}

const a = [2, 4, 7, 4, 2, 5, 6, 7, 8, 1, 3];

//console.log(majority(a, lessThanNumber));

// Challenge 10
// Create a function prioritize that accepts an array and a callback. The callback will return either true or false. 
// prioritize will iterate through the array and perform the callback on each element, and return a new array, where 
// all the elements that yielded a return value of true come first in the array, and the rest of the elements come 
// second.

var prioritize = function (arr, f) {
    let arr_true = []; arr_false = [];
    for (let i = 0; i < arr.length; i++) if (f(arr[i], lessThan)) arr_true.push(arr[i]); else arr_false.push(arr[i]);
    return arr_true.concat(['/'], arr_false);
}

//console.log(prioritize(a, lessThanNumber));

// Challenge 11
// Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate 
// through the array and perform the callback on each element. Each return value from the callback will be saved as 
// a key on the object. The value associated with each key will be the number of times that particular return value 
// was returned.

var countBy = function (arr, f) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) if (f(arr[i], lessThan)) if (obj[arr[i]]) obj[arr[i]]++; else obj[arr[i]] = 1;
    return obj;
}

var lessThanThisNumber = function (value, number) {
    return (value < number) ? value : false;
}

//console.log(countBy(a, lessThanThisNumber));

// Challenge 12
// Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate 
// through the array and perform the callback on each element. Each return value from the callback will be saved 
// as a key on the object. The value associated with each key will be an array consisting of all the elements that 
// resulted in that return value when passed into the callback.

const operations_with = 5;

var groupBy = function (arr, f) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) obj[arr[i]] = f(arr[i], operations_with);
    return obj;
}

var operations = function (value, number) {
    let arr = [];
    arr[0] = value + number;
    arr[1] = value - number;
    arr[2] = value * number;
    arr[3] = value / number;
    return arr;
}

//console.log(groupBy(a, operations));

// Challenge 13
// Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. 
// goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array 
// consisting only the keys whose associated values yielded a true return value from the callback.

var goodKeys = function (obj, f) {
    let arr = [];

    for (key in obj) if (f(obj[key], lessThan)) arr.push(key);
    return arr;
}

const o = { 1: 34, 2: 4, 3: 7, 4: 1, 5: 8, 6: 5, 7: 10, 8: 2, 9: 3, 10: 4 };

//console.log(goodKeys(o, lessThanNumber));