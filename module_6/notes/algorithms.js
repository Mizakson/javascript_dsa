// notes on algorithms
// examples of basic algorithms

// -----------------------------

/* 

Algorithm:

- a series of step-by-step instructions that describe how
to do something

to write an effective algorithm, when trying to solve a problem,
break it down into smaller parts and how these smaller parts can be 
solved with code


*/


// algorithm that converts celsius to farenheit
// (c * (9/5)) + 32 = f

function convertCtoF(celsius) {
    let fahrenheit = (celsius * (9 / 5) + 32);
    return fahrenheit;
  }
  
  convertCtoF(24);


// -----------------------------


// algorithm to reverse a string
function reverseString(str) {
    str = str.split(''); // split string into individual letters
    str = str.reverse(''); // reverse the letters
    str = str.join(''); // concatenate the letters
    return str;
  }
  
  reverseString("hello");


// -----------------------------


// algorithm to factorialize a number
function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    
    return product;
  }
  
// exaplanation

/* 
for every number greater than 1 passed through the function,
the for loop will be executed.

for loop:
increments by one and re-calculates the product to the value of num

*/

