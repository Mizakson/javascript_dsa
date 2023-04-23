// notes on functions

/* 
example function that prints "Hello World"
function functionName() {
    console.log("Hello World");
}

// calling the function after its defined
functionName();

functions are called by using its name with parentheses after it: functionName()
the code between the curly braces will be executed when the function is called.

*/


/* 
passing values to functions with arguments:

parameters are variables that are 
placeholders for the values that are to be input into a function when it is called

when functions are defined, it is typically defined along with one or more parameters

the actual values that are input ("passed") into a function when it is called
are known as arguments


ex 1.
function testFun(param1, param2) {
    console.log(param1, param2);
}

testFun("Hello", "World");
output -- Hello World


ex 2.
function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
}

functionWithArgs(2, 4);
output -- 6

*/


/* 
return statements:

values are passed into functions with arguments.
return statements send a value back out of a function


ex 1.
function plusThree(num) {
    return num + 3;
}

const answer = plusThree(5);
output -- 8


ex 2.
function timesFive(num) {
    return num * 5;
}

const answer = timesFive(5);
output -- 25

*/


/* 
global scope and functions:

scope means the visibility of the variables.

variables declared outside of a function have global scope, 
meaning they can be seen everywhere in the file

variables declared without using let or const are automatically global scope.
*** always declare variables with let or const. ***

ex.
let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}


function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

output -- myGlobal: 10 oopsGlobal: 5

*/


/* 
local scope and functions:

variables that are declared within a function (including parameters) have local scope.
local scope means they are only visible within the function


ex.
function myTest() {
    const loc = "foo";
    console.log(loc);
}

myTest();
output -- foo

ex 2.
function myLocalScope() {
  let myVar = 5;
  console.log('inside myLocalScope', myVar);
}

myLocalScope();
output -- inside myLocalScope 5

*/


/* 
undefined value returned from a function

functions don't have to include return statements.

if a function doesn't have a return statement,
the function processes the inner code but 
the returned value is undefined.

ex.
let sum = 0;

function addSum(num) {
    sum = sum + num;
}

addSum(3);
output -- addSum is not defined

*/


/* 
assignment with a returned value:

ex.
ourSum = sum(5, 12);

sum function is called adding 5 and 12 which is 17.
the returned value (17) is then assigned to the variable ourSum


*/





