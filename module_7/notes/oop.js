// notes on OOP (Object Oriented Programming)

// -----------------------------

/* 

OOP:
an approach to software development,
using objects and classes to organize code and 
to describe things and what they do

*/

// -----------------------------

/* 
objects in JavaScript are used to model real-world objects,
giving them properties and behavior like physical objects 


*note
when calling an object by a specific property use this pseudocode

console.log(objName.propName);

*/

// -----------------------------

/* 
objects can have a special type of property called a method,
methods are properties that are functions

pseudocode

let obj1 = {
    prop1: val1,
    prop2: function() {
        function code here
    },
}

obj1.prop2()


========
========

'this' keyword is preferrable when writing return statements in methods

ex.

let obj1 = {
    name: 'Max',
    sayName: function() {return 'My name is ' + this.name + '.'}
}

instead of typing the obj name, the this keyword makes code more resuable

*/

// -----------------------------

/* 
constructors:

functions that create new objects,
they define properties and behaviors that will belong to the new object

(constructors are basically blueprints for the creation of new objects)

ex.

function SoccerTeam() {
    this.name = "Liverpool";
    this.country = "England";
    this.league = "Premier League"
}

more notes on constructors...

*** 1. constructors are defined with a capitalized name
to distinguish them from non-constructor functions
2. constructors use the this keyword to set the properties of the new object
(this refers to the new object)
3. constructors define properties and behaviors instead of
returning a value like some other function


------
------

use the 'new' operator when calling a constructor.

ex. 
let team = new SoccerTeam();

the new operator tells JavaScript to create a new instance of SoccerTeam
called team.

object's created using constructors can also have its properties be accessed
and modified.

------
------

constructors can be extended to recieve arguments.

instead of putting a specific value for the properties 
in the constructor definition, use parameters and then pass
in values as arguments to define each unique instance of the object.

using the SoccerTeam example from above...

function SoccerTeam(name, country, league) {
    this.name = name;
    this.country = country;
    this.league = league;
}

if i wanted create a new object for a different team...

let manCity = new SoccerTeam("Manchester City", "England", "Premier League");
*** don't forget to use the 'new' keyword


the variable manCity is a specific instance of the SoccerTeam object.

------
------

anytime constructor function creates a new object, that object
is called an instance of its constructor. you can verify if an object
was created with a specific constructor using instanceof.
returns a boolean.

ex.
manCity instance of SoccerTeam;

------
------




*/