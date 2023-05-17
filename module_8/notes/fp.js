// notes on functional programming

// -----------------------------

/* 
functional programming:

a style of programming where solutions are 
simple isolated functions without any side effects outside 
of the function scope

INPUT -> PROCESS -> OUTPUT

3 principles
1. isolated functions
    there is no dependence on the state of the program
    including global variables

2. pure functions
    the same input always gives the same output

3. limited side effects
    any changes or mutations to the state of the program
    outside of the function are carefully controlled


------
------

functional programming terminology:

callbacks
- the functions that are slipped or passed into another function 
to decide the invocation of that function 

functions that can be assigned to a variable, passed into another function or 
returned from another function are called first class functions

*** all functions in JavaScript are first class functions


the functions that take a function as an argument, or return a function
as a return value are called higher order functions.


when functions are passed in to or returned from another function,
then those functions which were passed in or returned can be called
a lambda.


------
------

What is imperative code and what are the hazards of using it?

the imperative tense in english or other languages is used to
give commands. an imperative programming style is one that 
gives the computer a set of statements to perform a task.

often the statements change the state of the program, i.e. updating global variables,
writing a for loop that iterates over the indices of an array

in contrast...

functional programming is a form of declarative programming,
you tell the computer what you want done by calling a method or function

JavaScript has many predefined methods to handle common tasks,
so you don't have to write out how the computer should perform them.
instead of using a for loop, you can use the map() method which handles
the details of iterating over an array. This helps avoid semantic errors



*/