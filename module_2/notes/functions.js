// more notes on functions

/* 
arrow functions:

it isn't optimal to name functions under certain circumstances.
the most common being when passing another function as an argument
to another function.

these types of functions are called inline functions.
they are concise anonymous functions. 
an arrow function uses a new syntax to write inline functions

pseudocode:
const arrowFuncName = () => {
    function code here
}


ex 1.
const magic = () => {
    return newValue();
}

ex 2.
const myFunc = () => "value";
// returns the string value by default


---
---

writing arrow functions with parameters:

put a parameter inside of the parentheses

const doubler = (item) => item * 2;
// item is the parameter

doubler(4); //calling the function

if there is only one parameter parentheses can be omitted
like so...

const doubler = item = item * 2;


now with more than one parameter...

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);


*/

/* 
setting default parameters for functions


*/
