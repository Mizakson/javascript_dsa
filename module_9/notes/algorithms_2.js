// 2nd file with more in-depth notes on intermediate algorithms, with new dividers

/* 
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________

*/



/* 
algorithm 9/21:

 scenario...

 pass an array(s) through a function that returns only the first occurences
 of the values in order, in a separate array

*/

function uniteUnique(arr) {

// declare constants

/* 
1. args
is an array containing all of the arguments

2. finalArr
result array after the check is performed
*/
const args = [...arguments];
const finalArr = [];



// nested for loop, checking if a value is unique

/* 
first layer: for (let i = 0; i < args.length; i++)
- iterates through the args array

second layer: for (let j = 0; j < args[i].length; j++)
- iterates through the sub arrays

if statement: if (!finalArr.includes(args[i][j]))
- if the finalArr does not include the specific value... gets rid of repeats
finalArr.push(args[i][j]),
appending non-repeating values to finalArr

*/

for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
    if (!finalArr.includes(args[i][j])) {
        finalArr.push(args[i][j]);
        }
    }
}

return finalArr;
}



/* 
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________

*/

/* 
algorithm 10/21: replacing html entities

scenario --
replace html entities in a string with their notation

reference
& - &amp;
< - &lt;
> - &gt;
" - &quot;
' - &apos

*/

/* 
attempt 1: tried using a switch function

function convertHTML(str) {

  // chars obj, with match cases
  const chars = {
    "&": "&amp",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

str = str.replace( /[&<>"']/g, chars);
return str;

// in the replace regex, i was having difficulty replacing the & with its notation

*/

// solution
function convertHTML(str) {
    
    // individual replace statements for each char
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&apos;");
    return str;
  
  }


  
/* 
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________

*/



/* 
algorithm 11/21: sum all odd fibonacci numbers

scenario --
find the sum of all odd numbers in the fibonacci sequence
less than num (arg1).

*/

function sumFibs(num) {
  /* 
  1. iterate through num to find fib sequence 
  fib sequence - sum of two previous numbers
  using while loop, loop off of the condition while(next <= num)
  
  2. filter through fib sequence to find all odd nums less than num
  with an if statement
  
  3. find the sum of the odd nums less than num
  odd numbers % 2 = 1
  even numbers % 2 = 0
  */  
  

  /* initialize constants, 
  prev = first num (0), 
  next = current num (1), 1 is the 2nd num in the sequence, these will change 
  result = will be the sum of all the odd numbers while next <= num
  */
  
  var prev = 0;
  var next = 1;
  var results = 0;


  /* 
  while loop explained:
  loop runs on the condition if the current number <= arg (num),
  if the modulus of the current num is not 0 (meaning its odd),
  results = results + next

  after the loop:
  current number (next) = current num + previous num ** this is the fibonacci seq
  previous number (prev) = current num - previous num 
  
  */
  while (next <= num) {
    if (next % 2 != 0) {
      results += next;
    }
    next += prev;
    prev = next - prev;
  }
  return results;
}



/* 
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________

*/



/* 
algorithm 12/21: finding the sum of all prime nums 

scenario --
write a function that returns the sum of all prime numbers
that are less than or equal to num (arg1)

** REFERENCE
prime number - a whole number greater than 1 with exactly 2 divisors (1 and itself)

*/

function sumPrimes(num) {
  
  function sumPrimes(num) {
    // function to check if a num is prime
    function isPrime(num) {
      const sqrt = Math.sqrt(num); // the sqrt of num is its largest uniqiue divisor
      // for loop
      for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0) // if num is divisible by any of the numbers from 2 to its sqrt than its not prime  
          return false;
      }
      return true;
    }
  
    // Check if all nums withing the range are prime, then add them
    let sum = 0; // initial final value
    
    // for loop from 2 until i <= num
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) // if i is prime
        sum += i; // final = final + i
    }
    return sum;
  }
}



/* 
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________

*/



/* 
algorithm 13/21: smallest common multiple

scenario --
write a function that finds the smallest common multiple of the provided parameters
that can be divided by both as well by all sequential numbers in the range between 
the parameters

ex.
with the 2 parameters 1 and 3, that smallest common multiple that is also evenly
divisible by all numbers between 1 and 3, the answer is 6

*/