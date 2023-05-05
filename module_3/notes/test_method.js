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
the default test method is case sensitive

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

/* 
ignore case while matching

you can match both cases (string you want to match, the actual string)
by using a flag.

its possible to ignore case sensitivity by ignoring the i flag.

pseudocode...

/testString/i

put the flag at the end of the second backslash

*/

/* 
lookaheads:
patterns that tell JavaScript to look-ahead in the string to
check for patterns further along, this is useful when you want
to search for multiple patterns over the same string

there are two types of lookaheads, positive and negative.

positive
- will look to make sure the element in the search pattern is there,
but won't actually match it
- used as (?=...), the (...) part is the required part that is not matched

negative
- will look to make sure the element in the search pattern isn't there
- used as (?!...), (...) is the pattern that you don't want to be there
- the rest of the pattern is returned if the negative lookahead part 
is not present 


*/

// example of lookaheads
let sampleWord = "skyscraper";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);

/* 
the constraints are greater than 5 chars
and at least 2 consecutive digits

1st lookahead: (?=\w{6})
- greater than 5 chars

2nd lookahead: (?=w*\d{2})
- at least 2 consecutive digits

*/

/* 
checking for mixed grouping of characters:

you can check for groups of characters using parentheses ()
and the or (|) operand

example

want to check for either 'sky' or 'story' in a string

let testStr = 'story';
lest testRegex = /s(k|tor)y/;
testRegex.test(testStr);

*/

