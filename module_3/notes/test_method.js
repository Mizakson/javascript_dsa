// notes on the test method

/* 
regular expressions are used to match parts of strings,
creating patterns helps you match the strings

regular expression = regex

one way to test a regex is using the test method

test methods return a boolean

*/

// example 
let testStr = "JavaScript"
let testRegex = /Java/; // string i want to check
testRegex.test(testStr); // using the test method

// returns true

/* 
the test method is case sensitive

ex.
if i wanted to check 'Java' in a regex
JAVA or java would return false

*/

/* 
test method with multiple possibilities

its possible to have multiple possibilites using | operator

ex.
/stringOne|stringTwo/;


*/