// notes on loops

/* 
loops:

used to run the same code multiple times

the first type of loop is a while-loop
- it runs while a specified condition is true 
and stops once that condition is no longer true

here is an example of a while-loop...

const ourArray [];
let i = 0;

while (i < 5) {
    ourArray.push(i);
    i++;
}
// this while-loop adds the numbers 0-4 to ourArray
// the code will execute 5 times


now making a while-loop that has this output...
[5,4,3,2,1,0]

const myArray = []

let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}

console.log(myArray);

*/


/* 
for loops:

the most common type of loop is a for loop.
this is because it runs for a specific number of times

for loops are declared with three optional expression separated by semicolons:

for (a; b; c) {
    // code here
}

a = initialization statement (executed one time before the loop starts, used to define and setup loop variable)
b = condition statement (loop iteration will continue as long as this statement is true)
c = final expression (used to increment or decrement the loop counter)

here is an example...

const ourArray = [];

for (let i = 0; i < 5; i++) {
    ourArray.push(i);
}

output = [0, 1, 2, 3, 4]



ex 2. iterating odd numbers with a for loop
from 1-10

const myArray = [];

for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}

output = [1,3,5,7,9]


ex 3. counting backwards with a for loop

const myArray = [];

for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

output = [9,7,5,3,1]



ex 4. iterating through an array with a for loop

const myArr = [2, 3, 4, 5, 6];

// here is how to add each element...

let total = 0; // declare initial total variable
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i]; 
}


*/


/* 
nesting for loops:

multi-dimensional arrays require the use of nested for-loops.

ex.

// multi-dimensional array
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

another ex.
finding the product of a multi-dimensional array 

function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]); // output = 5040


*/


/* 
do... while loops:

the loop will first 'do' one pass of the code inside of the loop no matter what,
and then continue to run the loop while the specified condition evaluates to true.


ex.

const ourArray = [];
let i = 0;

do { // execute code in curly braces first
    ourArray.push(i);
    i++;
} while (i < 5); // then runs as a regular while loop

result = [0, 1, 2, 3, 4,]

*/


/* 
replace loops using recursion:

*** difficult concept ***

recursion - the concept that function can be expressed in terms of itself.


ex.

function multiply(arr, n) {
if (n <= 0) {
    return 1;
} else {
    return multiply(arr, n - 1) * arr[n - 1];
}
}


Recursive functions must have a base case when they return without calling the function again,
or they can never stop executing. (infinite loop)

another ex.

add the elements of an array
function sum(arr, n) {
  if (n <= 0) {
    return 0; 
  } else  if (n > 0) {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

read this article for explanation of recursion
https://medium.com/free-code-camp/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9


*/


