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

/* 
matching single characters not specified:

used for when you want to matches all the characters but the specified ones

use a caret (^) after the opening brace

ex.
matching all characters that arent a vowel
/[^aeiou]/gi;

*/

/* 
matching characters that occur one or more times:

use the plus sign (+)

example usage and output...

str = "aaaaaaa"
regex = /a+/g;

the output is "aaaaaaa"

------

matching characters that occur zero or more times

use the asterisk (*)

*/

// example 
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

/* 
output:
1. goooooooo
2. g
3. null
*/


/* 
types of matches in regular expressions

greedy match
- finds the longest possible part of a string that fits 
the regex pattern and returns it as a match


lazy match
- finds the smallest part of the string that 
satisfies the regex pattern

regular expressions by default are greedy,
but can be changed to lazy by using a question mark (?)


*/


/* 
matching beginning string patterns

regular expressions are also used to search for patterns
in specific positions in strings

using a caret (^) outside of a character set
- search for patterns in beginning of strings

*/

// example
let firstStr = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstStr);
let notFirst = "You can't find Ricky now."
firstRegex.test(notFirst);


/* 
matching ending string patterns

use the dollar sign ($) at the end of the regex
to search for patterns at the end of strings


*/

// example
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);

// 1st test statement = true 
// 2nd test statement = false


/* 
matching all letters and numbers

the closest character class in JavaScript to match the alphabet
is \w
- this shortcut = [A-Za-z0-9_] (also includes the underscore character)

the \w shortcut is known as a shorthand character class

*/


/* 
matching everything but letters and numbers

the opposite of \w shorthand is \W
which is equal to [^A-Za-z0-9_]

*/

/* 
matching all numbers

using \d shorthand character class
\d = [0-9]

----

matching all non-numbers

using \D shorthand character class
\D = [^0-9]

*/

/* 
example use case:  
restricting possible usernames

*/

/* 
matching whitespace:

its also possible to match the whitespace (spaces) 
between letters

shorthand = \s

----

matching non-whitespace characters:

its possible to search for everything except whitespace

shorthand = \S

** add .length to the end of the match statement to return the length of the string

pseudocode
myString.match(myRegex).length;

*/

/* 
specifying upper and lower number of matches:
+ sign means look for one or more chars
* means to look for zero or more chars

but sometimes you match a certain range of patterns.
this is possible using quantity specifiers (curly brackets)

you put two numbers inside of the curly brackets, foor the upper and 
lower number of patterns

ex.

str1 = 'goooool'
str2 = 'goal'

regex = /go{3,5}/;

regex.test(str1); // true
regex.test(str2); // false

-----

only specifying the lower number of matches:
only fill in the first number in the curly braces
{3,}


or

specifying the exact number of matches:
dont put a comma in the curly braces
{3}


*/

/* 
checking for all or none:

some patterns may have parts that don't exist,
but its still important to check for them.

using the question mark (?),
its poosible to check for zero or one of the previous element,
basically means that the element before the question mark is deemed optional


*/

/* 
reusing patterns using capture groups:



*/
