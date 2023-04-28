// more notes on operators

/* 
spread operator:

lets you expand arrays and other expressions that have multiple elements or parameters

ex.
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

...arr spreads the array, but it only works in-place
like in an argument to a function or in an array literal

ex 2.
making a direct copy of an array (arr1)

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; // spread operator inside of braces

console.log(arr2);

*/