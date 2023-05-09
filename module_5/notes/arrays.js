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




*/