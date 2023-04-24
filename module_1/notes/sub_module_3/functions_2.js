// more notes on functions (from sub module 3)

/* 
returning boolean values from functions:

it is common to use if/else statements to make comparisons
like this...

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}


but a better way to do this is using the strict equality operator...

function isEqual(a, b) {
    return a === b;
}

another ex.

function isLess(a, b) {
    return a < b;
}

*/


/* 
return early pattern for functions:

when a return statement is reached, the current function stops and returns to the calling location


function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();

"byebye" will never appear because it comes after the return statement.


*/

