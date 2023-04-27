// notes on const statements

/* 
some developers/engineers prefer to assign all variables using const,
unless they know that they will need to reassign the value, then they will use let

***
objects (arrays and functions) declared with const are still mutable
const only prevents reassignment of the variable identifier
***

*/

// example of chaning elements in an array
const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    return s;
  // cant use s = [2, 5, 7]

}
editInPlace();


// preventing object mutation

/* 
to make sure the data in the object is immutable
use the Object.freeze function

pseudocode = Object.freeze(objName);

*/

// ex
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS); 
}
