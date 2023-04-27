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