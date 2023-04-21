// notes on strings and string operations

/*
how to use a quote inside of a string
escaping literal quotes in strings

use a backslash \ to escape a quote

ex.
const sampleStr = "Alan said, \"Peter is learning JavaScript"\.";

output - Alan said, "Peter is learning JavaScript"

ex 2.
desired output - I am a "double quoted" string inside "double quotes".
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

*/


/*
quoting strings with single quotes

in JavaScript single and double quotes work the same

the reason to use one type over the other is if you want to use both in a string

ex.
const conversation = 'I said to him,"Dinner's ready!"';
- the single quotes are the initial quotes for the whole string 
    and the double quotes are used to wrap individual quotes inside of the string

the above example still isn't correct because you still need to use backslashes to separate the quotes.

revised ex.
const correctStr = 'I said to him, "Dinner\'s ready!"';

ex 2.

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
*/


/* 
escape sequences in strings:

\' = single quote
\" = double quote
\\ = backslash
\n = newline
\t = tab
\r = carriage return
\b = backspace
\f = form feed

here is an example implementing more than one escape sequence...
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

output:
FirstLine
    \SecondLine
ThirdLine
*/


// STRING CONCATENATION
/* 
concatenating strings with the plus operator:

it is possible to concatenate (add together) strings with the + operator.

ex.
const addStr = "First phrase. " + "Second phrase.";

output: First phrase. Second phrase.

ex. 2
const myStr = "This is the start. " + "This is the end.";
output: This is the start. This is the end.


it is also possible to use the += operator to concatenate strings.

ex.
let myStr = "First sentence. ";
myStr += "Second sentence.";

and the output would be -- I come first. I come second.

*/

/* 
it's possible to construct strings using variables.

ex.
const myName = "Max";
const myStr = "My name is " + myName + "and I am well!";

output = My name is Max and I am well!


appending variables to strings:
you can also use the += operator on variables

ex.
const someAdjective = "fun";
let myStr = "Learning to code is ";
myStr += someAdjective;

output = Learning to code is fun

*/


/* 
Finding the length of a string

console.log("string".length);
or you can declare a variable and use it instead
console.log(myVar.length);

ex.
let lastNameLength = 0;
const lastName = "Smith";

lastNameLength = lastName.length;

*/


/* 
using bracket notation to find the first character in a string
-- indexing --

ex. 
const firstName = "Max";
const firstLetter = firstName[0];
output would be - M

*/


/* 
string immutability:

in JavaScript string values are immutable, meaning they can't be altered once they are created.

variables can be reassigned to have different strings as the values, 
but the strings can't be altered when trying to index.

ex.
you can't do this
let myStr = "Bob";
myStr[0] = "J";
Bob is the str value of the myStr variable, 
to change the first letter to J, you would have to edit the assignment of the myStr variable

*/


