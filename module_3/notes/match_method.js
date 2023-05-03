// notes on the match method

/* 
extracting matches:

after using the test method to check if cases match,
use the match method to extract the found matches

the .match method syntax is the opposite of the .test method

pseudocode...

string.match(regex)

*/

/* 
finding more than just the first match using the global search flag

add a g after the second backslash
*/

// example of global flag
let string = "TEST, TEST, TEST";
let regex = /TEST/g;

string.match(regex);

// its also possible to use multiple flags, /TEST/gi (type the flags next to each other, no space)

/* 
wildcard (.):

allows you filter a regex.

ex. 
I want to only check if the str has the letters 'un' and first letter doesnt matter

/.un/

*/

/* 
matching a single character with multiple possibilities:

the extremes of regular expressions are /literal/ and /./
but its possible to have a balance between the two extremes

using [] around the specific letter that has multiple cases

*/

// example
let testStr = "job, jog, joy, jot";
let testRegex = /jo[bgyt]/;
testStr.match(testRegex);

/* 
matching letters of the alphabet

inside of the braces use a hyphen to indicate the range between the 
starting letter and the end letter

ex. letters b-f
/a[b-f]e/;

or letters and numbers...

ex. 
/[a-z0-9];

*/