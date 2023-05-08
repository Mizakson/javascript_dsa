// notes on debugging in JavaScript
// more note-focused

/* 
what is debugging?

debugging is the process of going through your code,
finding issues and fixing them.

these issues usually come in three forms:

1. syntax error
- prevents your program from running

2. runtime error
- when your code has unexpected behavior

3. logical error
- where your code doesn't do what you intended

*/

// ------------------------------------------

/* 
using the JavaScript console to check the value of a variable:

    Chrome and Firefox have JavaScript consoles (DevTools) for debugging JavaScript

    Chrome...
    visit developer tools in menu

    Firefox...
    visit Web Console in menu

*********

    console.log() prints the output of what is inside of the parentheses (to the console)
    placing it at certain points in the code can show you the indtermediate values of
    variables.

    best practice is to have an idea of what the output should be before running the code.
    having checkpoints to see the status of the calculations throughout the code will help
    narrow down where the problem is.


*/

// ------------------------------------------

/* 
browser console cont'd:

    there are many methods to use with console to output messages,
    like log, warn, and clear (there are many more)

    to access the browser console, right click on a webpage and select inspect.


*/

// ------------------------------------------

/* 
using typeof to check the type of a variable:

    typeof is used to check the data structure (type) of a variable,
    this is really useful when working with multiple data types.

    note:
    type errors can lurk in calculations or function calls,
    be careful for these errors when accessing and working with
    external data in the form of a JSON (JavaScript Object Notation) object.

    typeof recognizes 7 immutable (primitive) data types...
    1. Boolean
    2. Null 
    3. Undefined
    4. Number
    5. String
    6. Symbol
    7. BigInt

    and one type for mutable items...
    1. Object

    note: in JavaScript, arrays are technically a type of object

*/

// ------------------------------------------

/* 
common forms that bugs take:

1. spelling error
syntax issue, very common with people who type fast,
very important because JavaScript is case sensitive


2. unclosed parentheses, brackets, braces and quotes
another syntax issue, forgetting to close a piece
tends to happen when you're editing existing code and inserting
items with one of the pair types. Be careful when nesting code blocks,
don't forget the closing pair

one way to avoid this is as soon as the opening character is typed,
include the closing character, move the cursor in between and then
start typing. modern code editors generate the second half of the pair
automatically


3. mixed usage of single and double quotes
syntax error, matter of preference and also depends on the string

in general use double quotes when there is a phrase in the quotes
the require quotes or an apostrophe

you can also use an escape sequence if you prefer single quotes


4. use of assignment operator instead of equality operator
= is the assignment operator
== and === are equality operators

don't forget to check the control flow, if you want to assign
a value to a variable use the assignment operator

when creating conditional statements, use the equality operator


5. missing open and closing parentheses after a function call
you still have to include empty parentheses when calling a
function that might not have arguments. 

this error can be detected by logging variables (or their types) 
to the console and seeing that one is set to a function reference, 
instead of the expected value the function returns


6. arguments passed in the wrong order when calling a function
if the arguments are inputted in the wrong order when they are 
different data types, a runtime error will usually occur. 
if the arguments are the same data type and still inputted in
the wrong order, then the logic of the code won't make sense


7. off by one errors when using indexing
off by one errors (OBOE) happen when you're trying to target
a specific index of a string or array, or when looping over 
the indices. 

JavaScript indexing starts at 0, the last index is always one
less than the length of the item. 

the error happens when you try to access an index 
equal to the length of the item, you will get an 'index out of range'
error or undefined

when using string or array methods, read the documentation to check
if they are inclusive (the item at the given index is part of what is returned)
or not

    ---------

    example 

        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let len = alphabet.length;
        
        for (let i = 0; i <= len; i++) {
        console.log(alphabet[i]);
        } // loops one too many times (because of i <= len)
        
        for (let j = 1; j < len; j++) {
        console.log(alphabet[j]);
        } // loops one too few times (because of j = 1)
        
        for (let k = 0; k < len; k++) {
        console.log(alphabet[k]);
        } // loops correctly


8. reinitializing variables inside of a loop
potential use cases:
  when you have to save necessary information,
  increment counters, or re-set variables
  within a loop

what happens when the error goes undetected:
  if you accidentally reset the variable being 
  used for the terminal condition, this creates
  an infinite loop

what to do when you get this error:
  print variable values with each cycle of the loop
  by using console.log()


9. prevent infinite loops with a valid terminal condition
loops are used to run a code block a certain number of times
or until a condition is met, but they need a terminal condition
that stops the loop.

infinite loops crash the browser or freeze the computer,
never let a loop be infinite

its the programmer's responsibility to make sure the
terminal condition is the code is reached.

one error is incrementing or decrementing a counter variable
in the wrong direction from the terminal condition.

another error is accidentally resetting a counter or 
index variable within the loop code, instead of incrementing
or decrementing


*/