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