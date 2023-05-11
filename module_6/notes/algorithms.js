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


// -----------------------------


// algorithm to find the longest word in a string

function findLongestWordLength(str) {
  let words = str.split(' '); // words == each word in the string
  let maxLen = 0; // set max length
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLen) {
      maxLen = words[i].length;
    }
  }

/* 
for loop iterates through each word in the split array
if the length of the word being iterated is greater than the previous
length, the max length is replaced.

this is continued until the end of the loop

*/

  return maxLen;
}


// -----------------------------


// algorithm to return the largest numbers in an array with 4 sub-arrays


function largestOfFour(arr) {
  let results = []; 

  // for loop to iterate through the array
    for (let i = 0; i < arr.length; i++) {
      let max = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > max) {
          max = arr[i][j];
        }
      }
      results[i] = max;
    }

  return results;
}


// -----------------------------


// algorithm that is the same as the .endsWith() method


function confirmEnding(str, target) {
  if (str.slice(str.length - target.length) === target) {
    return true;
  } else {
    return false;
  }
}


// -----------------------------


// algorithm that is the same as the .repeat() method

function repeatStringNumTimes(str, num) {
  let totalStr = ""; // declare var for the output

  for (let i = 0; i < num; i++) {
    totalStr += str; // for loop that repeats the string until the loop reaches the num
  }
  
  return totalStr;
}

