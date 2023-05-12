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


// -----------------------------


// algorithm to truncate a string

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  }
  return str;
}

/* 
if the length of the string is greater than the number used as an arg,
the string is sliced until the index of the num, and '...' is added to the end

*/


// -----------------------------

/* 
algorithm that runs off of two conditions:

1. iterates through an array, checking if each value 
passes a 'test' which is the function

2. if an element of the array passes the test, the first element 
that passes the test is returned, otherwise it returns undefined

*/


function findElement(arr, func) {
  let num = 0;
  
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}


// -----------------------------


// algorithm to check if a value is classified as a boolean

if (bool === true | bool === false) {
  return true;
} else {
  return false;
}


// -----------------------------


// algorithm to make a string into titleCase (first letter capital, rest are lowercase)

function titleCase(str) {
  // capitalize first letter of each word
  // iterate through the string
  str = str.split(' ');

  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].toLowerCase().split('');
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join('')
    
  }
  return str.join(' ');


}


// -----------------------------

// algorithm that copies elements from the first array and inserts elements at the n index of the second array. 


function frankenSplice(arr1, arr2, n) {
  let arr = arr2.slice(); // this is the copy of arr1 that needs to be modified
  
  for (let i = 0; i < arr1.length; i++) {
    arr.splice(n, 0, arr1[i]);
    n++;
  }

  return arr;
}


// -----------------------------

// algorithm that removes all falsy values from an array

function bouncer(arr) {
  let arr2 = []; // create 2nd array that is a modified version of arr

  /* 
  
  iterate through arr to check if an of the elements
  are equal to false, null, 0, "", undefined, NaN
  
  if true, remove those specific elements from the 
  2nd array using splice

  */

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) arr2.push(arr[i]); // if element is not falsy, push to arr2
  }


  return arr2;
}


// -----------------------------

/* 
algorithm that returns the lowest index at which the second arg (num) 
should be inserted into arr once it has been sorted 
*/


function getIndexToIns(arr, num) {
  // have to sort the array
  arr.sort((a, b) => a - b); // sorting the array in ascending order

  // compare num to the elements in the array
  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i; 
  }

  return arr.length;


}


// -----------------------------

/* 
algorithm that returns true if the first element in of the arg (arr)
contains all of the letters of the string in the second element of arr.

otherwise, returns false

*/


function mutation(arr) {
  // make both strings lowercase
  const testStr = arr[1].toLowerCase();
  const targetStr = arr[0].toLowerCase();

  // for loop using .indexOf() method
  for (let i = 0; i < testStr.length; i++) {
    if (targetStr.indexOf(testStr[i]) < 0) return false;
  }
  return true;
  
}


// -----------------------------

/* 
algorithm that splits an array (arr) into groups the length of (size)
and returns them as a 2D array
*/

function chunkArrayInGroups(arr, size) {
  const arr2 = []; // end array
  
  // for loop iterating through array
  for (let i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, i + size));
  }


  return arr2;
}



