// intermediate algrithm scripting notes
// code examples w/ explanations

// ---------------------------------

/* 
algorithm that takes an array with two elements as an argument.
the function sumAll, finds the sum of the two elements, and adds it
to the sum of all the numbers between the two numbers (from min to max).

*/

function sumAll(arr) {
    const max = Math.max(arr[0], arr[1]);
    const min = Math.min(arr[0], arr[1]);
    
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  

// ---------------------------------

/* 
algorithm that compares elements in two different arrays,
and returns a new array of elements that can only be found in one array
*/

function diffArray(arr1, arr2) {
    const newArr = arr1.concat(arr2);
   
     return newArr
     .filter(item => !arr1.includes(item) || !arr2.includes(item));
   }


// ---------------------------------

/* 
an algorithm that takes an array, and another argument(s),
if the additional argument(s) are also in the array, they 
are removed, and only the new array that is filtered is returned
*/

function destroyer(arr) {
  // using the arguments object
  /* 
  set constants, the values that will be removed
  and a new array that is filtered

  the first statement (removingValues) creates an array that will be compared 
  to the original array

  this algorithm is particularly hard for me, so i am trying to understand the 
  solution

  the for loop:
  first layer, iterates through the initial array
  sets an initial boolean value of false to a new var removeElement


  second layer, compares the values we want to remove (removingValues)
  to the initial array, if the arr[i] is the same as removingValues[j] then 
  removeElement is true.

  if statement:
  uses the logical NOT ! operator


  */

  const removingValues = Object.values(arguments).slice(1);
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < removingValues.length; j++) {
      if (arr[i] === removingValues[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArr.push(arr[i]);
    }
  }


  return filteredArr;
}


// ---------------------------------

/* 
algorithm for a function that looks through an array of objects (arg 1)
and returns an array of all objects that have matching name and value pairs (arg 2)

*/

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  // iterate through the collection using filter w/ different methods inside of it
  return collection.filter(obj => sourceKeys
  .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
  .reduce((a,b) => a && b));
}


// ---------------------------------

// algorithm that converts a string to spinal-case (lowercase-with-dashes)

function spinalCase(str) {
  // regex for whitespaces and underscores
  const regex = /\s+|_+/g;
  
  // replace lower-uppcase to lower + space + uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  /* 
  meaning of "$1 $2":
  parenthesized submatches,
  $1 is the string/character caught by the range in the first parentheses
  $2 is the string/character caught by the range in the second parentheses
  
  */

  // replace whitespcae with hyphen and make final str lowercase
  return str.replace(regex, "-").toLowerCase();
  
}


// ---------------------------------

/* 
algorithm that converts strings into pig latin

rules of pig latin:
if the word begins with a consonant, take the first consonant(s), 
move it to the end of the word and add 'ay'

if the word begins with a vowel add 'way' to the end

input strings will always be all lowercase

*/

function translatePigLatin(str) {
  // if the str starts with a vowel (first replace statement)
  // if the str starts with consonant(s) (second replace statement)
  // replace statements for vowelStart and consonantStart 
  
    return str
    .replace(/(^[aeiou])\w*/, "$&way")
    .replace(/(^[^aieou]+)(\w*)/, "$2$1ay");
  
  // $& == matched by the whole regex
  // &2&1 == matched by groups 2 and 1 (group 2 first, then group 1)
  
  }


// ---------------------------------

