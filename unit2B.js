// Challenge 4
// The function reduce takes an array and reduces the elements to a single value. 
// For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

function reduce(arr, f, init) {
    for (let i = 0; i < arr.length; i++) init = f(init, arr[i]);
    return init;
}

var nums = [4, 1, 3];
var add = function (a, b) { return a + b; }
reduce(nums, add, 0);   //-> 8

//console.log(reduce(nums, add, 0));

// Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates 
// the output of each loop. The array is iterated over, passing the accumulator and the next array element as 
// arguments to the callback. The callback's return value becomes the new accumulator value. 
// The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. 
// add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings 
// it to 8, which is returned. 

// Challenge 5
// Construct a function intersection that compares input arrays and returns a new array with elements found in all 
// of the inputs. BONUS: Use reduce!

var intersection = function (arr1, arr2) {
    var new_arr = [];
    for (let i = 0; i < arr1.length; i++) {
        let value = arr2.filter((v) => v === arr1[i])[0];
        if (value && !new_arr.filter((v) => v === value).length) new_arr.push(value);
    }
    return new_arr;
}

const a = [2, 4, 7, 4, 2, 5, 6, 7, 8];
const b = [0, 5, 6, 4, 3, 1, 5, 7, 7];

//console.log(intersection(a, b));

// Challenge 6
// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat
//  array that contains all elements. If there are duplicate elements, only add it once to the new array. 
//  Preserve the order of the elements starting from the first element of the first input array. 
// BONUS: Use reduce!

function union(arr_nested) {
    var new_arr = [];
    for (let i = 0; i < arr_nested.length; i++) {
        for (let j = 0; j < arr_nested[i].length; j++) {
            let value = arr_nested[i][j];
            if ((value || value == 0) && !new_arr.filter((v) => v === value).length) new_arr.push(value);
        }
    }
    return new_arr;
}

const ar = [[2, 4, 7, 4, 2, 5, 6, 7, 8], [0, 5, 6, 4, 3, 1, 5, 7, 7]];

//console.log(union(ar));

// Challenge 7
// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object 
// and return it. To build the object, objOfMatches will test each element of the first array using the callback 
// to see if the output matches the corresponding element (by index) of the second array. If there is a match,
//  the element from the first array becomes a key in an object, and the element from the second array becomes 
//  the corresponding value.

// function objOfMatches(arr1, arr2, cb) {
//     var newObj = {}
//     for (var i = 0; i < arr1.length; i++) {
//         for (var j = 0; j < arr2.length; i++) {
//             let val1 = arr1[i];
//             let val2 = arr2[j];
//             if (val1 == val2) {
//                 cb(){///????????
//                     return newObj.push(val1, val2)
//                 }
//             }
//         }
//     }

// }

function objOfMatches(arr1, arr2, cb) {
    var newObj = {};

    for (var i = 0; i < arr1.length; i++) {
        if (testMatches(arr1[i], i, arr2)) newObj[i] = arr1[i];
    }
    return newObj;
}

var testMatches = function (value, index, arr) {
    return arr[index] === value;
}

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
var arr2 = [4, 5, 3, 7, 8, 9, 1, 8];

//console.log(objOfMatches(arr1, arr2, testMatches));


// Challenge 8
// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks.
//  multiMap will return an object whose keys match the elements in the array of values. The corresponding values 
//  that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input 
//  to each callback is the key.

const myNumber = 3;

var multiMap = function (arr, arr_f) {
    var obj = {};
    for (let i = 0; i < arr.length; i++) {
        let result_arr = [];
        for (let j = 0; j < arr_f.length; j++) result_arr.push(arr_f[j](arr[i]));
        obj[arr[i]] = result_arr;
    }
    return obj;
}

var sum = function (n) {
    return n + myNumber;
}
var del = function (n) {
    return n - myNumber;
}
var mult = function (n) {
    return n * myNumber;
}
var div = function (n) {
    return parseFloat((n / myNumber).toFixed(1));
}

console.log(multiMap(arr2, [sum, del, mult, div]));