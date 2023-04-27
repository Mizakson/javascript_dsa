// difference in scopes of let and var statements

/* 
var - variable is declared globally (or locally if declared inside a function)

let - variable declared inside a block, statement or expression
its scope is limited to that block, statement or expression

*/


//example
var numArray = [];
for (var i = 0; i < 3; i++) {
    numArray.push(i);
}

console.log(numArray); // [0, 1, 2]
console.log(i); // 3

// declaring the var before the loop
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
    numArray.push(i);
}

// same output
console.log(numArray); // [0, 1, 2]
console.log(i); // 3


// example using let statements instead of var
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);


// ex 2
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
