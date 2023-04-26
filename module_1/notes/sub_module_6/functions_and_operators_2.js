// notes on the final submodule in the first module "Basic Java Script"

/* 
generate random fractions (decimals) in JavaScript

Math.random() function - generates a random decimal number between 0 and 1.
Math.random can return a 0 and not a 1

generate random whole numbers in JavaScript

1. Math.random()
2. multiply the generated decimal by 20 (to make the range between 0 and 19)
3. use Math.floor, rounding the number down to its nearest whole number

ex.

Math.floor(Math.random() * 20);



generate random whole numbers within a range:

pseudocode...
Math.floor(Math.random() * (max - min + 1)) + min


parseInt function
 - parses a string and returns an integer

 ex. 
 const a = parseInt("007");

 - using a function
 function convertToInteger(str) {
  str = parseInt(str);
  return str;
}

convertToInteger("56");


parseInt with a Radix (base of each number system):
used for binary

pseudocode
parseInt(string, radix);

const a = parseInt("11", 2);


converting binary into integer function:

function convertToInteger(str) {
  return parseInt(str, 2);
}
  
convertToInteger("10011");

*/


/* 
conditional operator:
(aka ternary operator)

a one line if-else expression

syntax is a ? b : c

a = condition
b = code to run when the condition returns true
c = code to run when the condition returns false


ex. w/ if/else statement
function findGreater(a, b) {
    if (a > b) {
        return "a is greater";
    } else {
        return "b is greater or equal"
    }
}


now using ternary operator...

function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
}


using multiple ternary operators:
function findGreater(a, b) {
    return (a === b) ? "a and b are equal"
    : (a > b) ? "a is greater"
    : "b is greater";
}

used when chaining together multiple conditions

function checking the sign of an integer

function checkSign(num) {
  return (num > 0) ? "positive"
  : (num < 0) ? "negative"
  : "zero";
}

checkSign(10);

*/
