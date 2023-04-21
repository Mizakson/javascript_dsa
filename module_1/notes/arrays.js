// notes on arrays

/* 
arrays
- let you store several pieces of data in once variable
- created using square brackets, separate items with a comma, and use the = operator
- can store different data types
ex.

const sandwich = ["peanut butter", "jelly", "bread"];

const myArray = ["text", 1];


it's possible to nest arrays inside of each other...
also referred to as a multi-dimensional array

ex.
const teams = [["Bulls", 23], ["Wizards", 45]];

*/


/*
indexing in arrays:
array indexes use the same bracket notation that strings use.
the index refers to an entry in an array

ex.
const array = [50, 60, 70];
console.log(array[0]); \\ output == 50
const data = array[1]; \\ output == 60


data modification using indexes...

declare a specific entry to have a new value using the = operator

ex.
const ourArray = [50, 40, 30];
ourArray[0] = 15;
the first entry is now 15



indexing in multi-dimensional arrays:

index values refer to each individual array nested inside of the outermost array.

ex.
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3]; \\ output == [[10, 11, 12], 13, 14]
const nestedSubarray = arr[3][0]; \\ output == [10, 11, 12]
const element = arr[3][0][1]; \\ output == 11

[second level nested array][third level nested array][individual element]

*/


/* 
array manipulation continued...

push method:

.push() takes one or more parameters and pushes them onto the end of the array

ex.
const arr1 = [1, 2, 3];
arr1.push(4);
-- adds 4 to the end of the array, arr1[3]

ex 2.
const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
-- adds another array as the last element in the arr2
output = ["Stimpson", "J", "cat", ["happy", "joy"]] \\ arr2[3]


pop method:

.pop() is used to remove a value off of the end of an array

ex.
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop(); \\ output = [1, 4]

ex 2.
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop(); \\ new variable removes the 2nd element from the array



shift method:

.shift() is the pop method for the first element of an array.

ex.
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();



unshift method:

.unshift is like the push method for beginning of an array.

ex.
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

*/

// see shopping_list.js, using knowledge on arrays. 


