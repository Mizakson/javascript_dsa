// notes on replace method

/* 
using capture groups to search and replace:

.replace() makes it possible to search and replace text in a string.

pseudocode...

initialStr.replace(desiredRegex, "strBeingReplaced")

first parameter in parentheses is the regex pattern you want to search for.
second parameter is the string to replace

its also possible to access capture groups in the replacement string using dollar signs ($)

ex. changing str (one two three) to replaceText (three two one)

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);


*/

/* 
removing whitespace from start to end

without using String.prototype.trim() method

here is how to remove whitespace at the beginning and end of strings
using regular expressions


let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, ""); 

wsRegex explanation
- ^\s+
    starting whitespace(s)
- |
    or
- \s+$
    ending whitespace(s)

result explanation
- replacing the whitespaces with wsRegex

*/

