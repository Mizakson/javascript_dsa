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


-------
-------

avoiding mutations and the side effects of functional programming:

sometimes when you call a function on a variable, array or object
the function changes the variable or something in the object (side effect)
basically unintentional changes in code

one core principle of functional programming is to not change things,
changes lead to bugs. It's easier to prevent bugs knowing that
your functions don't change anything (including the function arguments
or any global variable)

changing or altering things in functional programming is called mutation, and the 
outcome of a mutation is called a side effect.

ideal functions are pure functions (don't cause side effects)


-------
-------

passing arguments to avoid external dependence in a function:

another principle in functional programming is to always declare dependencies 
explicitly, meaning if a function depends on a variable or object being present, then pass
that variable or object directly into the function as an argument.

benefits...
1. function is easier to test (you know exactly what input it takes, not dependent on anything else)
2. more confidence when altering/removing/adding code (you know what you can and cannot change, you can see potential traps)
3. function would always produce the same output for the same set of inputs, no matter what part of the code executes it


*/


/* 
.map() method:

used to extract data from an array

the map method iterates over in each item in an array
and returns a new array containing the results of calling 
the callback function on each element, without mutating the original array

when the callback is used it is passed 3 arguments
1. current element being processed
2. index of that element
3. array upon which the map method was called on



--------

implementing map on a prototype:

map is a pure function, and its output is solely dependent on
its inputs. it takes another function as its argument

ex.
writing my own map method titled myMap
same as the map method but spelt out in code

Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};


*/


/* 
.filter() method:

calls a function on each element oof an array and returns a new array containing
only the elements for which that function returns a truthy value (true for Booleans).
Basically, it filters the array based on the function passed to it, without modifying the
original array

callback function also accepts three arguments
1. current element being processed
2. index of that element
3. the array that the filter was called on


writing out the .filter() method using a prototype

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) == true) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};


*/

/* 
slice method:

returns a copy of certain elements in an array.

takes two arguments...
1. index of where to begin slicing
2. where to end the slice (non-inclusive)

if arguments are not provided the default is to start at the beginning
and go through the end.

doesn't mutate the original array, makes a new one

------
------

splice is used when you want to remove items and keep
the rest of the array

splice takes 2 arguments...
1. where to start removing items
2. the number of items to remove


*/

/* 
concat method:

used to combine two arrays or to combine strings

for arrays...
the method is called on one, then another array is the argument for concat
the array passed through concat is added to the end of the first array.
it returns a new array, doesn't mutate the original

ex. arr1.concat(arr2);


*/
