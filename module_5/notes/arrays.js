// notes on arrays
// more note-focused (less examples, only when necessary)

// ------------------------------------------

/* 
arrays:
used to store a collection of data

the simplest implementation is a one-dimensional array
holds all data types


arrays have a length property, which can be accessed
using arrayName.length

arrays are capable of storing complex objects,
a.k.a multi-dimensional arrays

myArray = [1, 'two', true];


-------
-------


accessing array contents using bracket notation:
a fundamental feature of any data structure is the ability
to retrieve specific data on command

use bracket notation [] for indexing


-------
-------


add items to an array using push() and unshift()

push() adds an element to the end of an array
unshift() adds an element to beginning of an array


remove items from an array using pop() and shift()

pop() removes an element from the end of an array
shift() removes an element from the beginning of an array


remove specific items from an array using splice()

splice can take up to 3 parameters,

1st parameter represents the index on the array to begin removing elements
2nd parameter represents the number of elements to delete


add specific items using splice() 

the third parameter in splice is used to add to the array
takes on or more elements

-------
-------

its also possible to copy items in an array using slice (not splice)
to create an new array by extracting the elements from 
the existing array

ex.

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);

todaysWeather would output ['snow', 'sleet']
weatherConditions would still have ['rain', 'snow', 'sleet', 'hail', 'clear']


-------
-------


copying an array with the spread() operator
- slice allows elements of an array to be copied
- spread allows arrays themselves to be copied

syntax for spread is ...

ex.

let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1];


combining arrays with the spread operator
- when created a new array for the combined array,
list the array in spread syntax as one of the elements 
in the new array

ex.
let arr1 = [3, 4];
let arr2 = [1, 2, ...arr1, 5, 6];


-------
-------


indexOf() method

used to check for the presence of an element in an array
takes the element as a parameter

when called it returns the index of the element in the array,
or -1 if the element doesn't exist in the array 


-------
-------


iterating through all of an array's items using a for loop


ex.
want to iterate through an array of integers,
if the element is greater than 10 it is added to a new array

function greaterThanTen(arr) {
    let newArr =[];
    for (let i=0; i < arr.length; i++) {
        if (arr[i] > 10) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// call the function
console.log(greaterThanTen([1, 11, 1111, 22, 2, 2222, 3, 33, 333]));
// only adds numbers greater than 10 to the newArr


-------
-------


multi-dimensional arrays:

arrays can become more complex when you nest arrays inside of arrays,
these complex arrays are called multi-dimensional arrays.

multi-dimensional arrays can have infinite levels,
when indexing multi-dimensional arrays, use bracket notation chained to each other

ex.

arr[1][2][3][4][5]

1st bracket represents the 1st level, 2nd == 2nd level and so on...

ex.
5 level nest array
let myNestedArray = [
  1, 
  [2, ['deep', 3, ['deeper', 4, ['deepest', 5]]]]
];


*/