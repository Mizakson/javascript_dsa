/* 

there are 8 different data types in javascript - will go further in-depth later

1. undefined
2. null
3. boolean
4. string
5. symbol
6. bigint
7. number
8. object

*/

// here is how to declare a variable called myName
var myName;

/* 

to declare a string variable 
double quotation marks ""
need to surround the string after the assignment operator

*/

// here is an example declaring two variables, myFirstName and myLastName
var myFirstName = "John";
var myLastName = "Doe";


/* 
uninitialized variables:

when variables are declared they have an initial value of undefined.

if you do a mathematical operation on an undefined variable you get the result NaN (Not a Number).

if you concatenate a string with an undefined variable, you will get a string of undefined.

*/

/* 
case sensitivity in variables:
    variable names and function names are case senssitive

    examples...
    MYVAR != MyVar != myvar

in JavaScript variable names are written using camelCase
camelCase - multiword variable names have the first word in lowercase
and the first letter of each subsequent word is capitalized

another example of camelCase == properCamelCase

*/

/* 
differences between var and let keywords:

var makes it easier to overwrite variables, which makes it more difficult to prevent 
accidently overriding variables in a large codebase

the let keyword only allows a variable with the same name to be declared once.
if you try to use the same variable name with the let keyword, an error message pops up.

here is an example of changing two variables declared with the var keyword to the let keyword...

*/

// initial declaration 
var catName = "Oliver";
var catSound = "Meow!"; 

// substitute var with let
let catName = "Oliver";
let catSound = "Meow!";


/* 
const keyword:

the const keyword makes variables read-only.
once a variable is assigned with const it can't be reassigned.

***
developers and engineers use all caps when declaring constants in JavaScript.
***

here is an example...

const FAV_PET = "Cats";
FAV_PET = "Dogs";

since the const was already assigned with the value "Cats", the result would be an error message.

*/
