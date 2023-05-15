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

own properties:

own properties are defined directly on the instance object.

in the case of the SoccerTeam constructor,
the own properties would be name, country and league

------
------

in order to reduce duplicate code, use the prototype keyword.

the prototype keyword lets all of the properties defined using 
this keyword shared among all instances of the object

ex.
SoccerTeam.prototype.league = "Premier League";
// if I was making a list of all premier league teams, 
// this is a prototype that would set all teams to have the premier league as the default league

you can add prototypes after defining the constructor

*/

// -----------------------------

/* 
iterating over all properties in an object:

so far there are two types of properties,
own properties and prototype properties

own properties are directly on the object instance itself

prototype properties are defined on the prototype


pseudocode

function ConstructorFunc(prop1, ...) {
    this.prop1 = prop1; // own property
}

ConstructorFunc.prototype.otherProp = otherValue; // prototype property


here is the pseudocode to add an objects own properties to its own array, and
add the prototype properties to its own array

let ownPropsArr = [];
let prototypePropsArr = [];

for (let property in objName) {
    if (instanceOne.hasOwnProperty(property)) {
        ownPropsArr.push(property);
    } else {
        prototypePropsArr.push(property);
    }
}

// logging on console
console.log(ownPropsArr);
console.log(prototypePropsArr);

*/

// -----------------------------

/* 
the constructor property:

the constructor property is a reference to the 
constructor function that created the instance.
this is used to find out what kind of object it is.

ex. 
let manCity = new SoccerTeam(); 

console.log(manCity.constructor === SoccerTeam);
// output would be 'true'

*/

// -----------------------------

/* 
prototypes can be added individually but it takes a long time 
to make many prototypes.

its possible to make many prototypes at once by creating a new
object that already contains the properties, so all properties are
added all at once.

ex.

SoccerTeam.prototype = {
    league: 'Premier League';
    sayLeague: function() {
        console.log("This team plays in " + this.league);
    },
    sport: function() {
        console.log("This team plays soccer.");
    }
};

**** note ****
remember to set the constructor property when changing the prototype

the constructor property is overwritten if you add properties to the 
prototype.

using the above code here is the new prototype with the constructor property.

SoccerTeam.prototype = {
    constructor: SoccerTeam, // here is the constructor property
    league: 'Premier League';
    sayLeague: function() {
        console.log("This team plays in " + this.league);
    },
    sport: function() {
        console.log("This team plays soccer.");
    }
};

*/

// -----------------------------

/* 
where does an object's prototype come from?

an object inherits its prototype directly from
the constructor function that created it.

ex.
manCity inherits its prototype from SoccerTeam.

to check object's constructor function, use 
the isPrototypeOf() method.

SoccerTeam.prototype.isPrototypeOf(manCity);
// returns true



---------
---------

what is a prototype chain?

all objects in JavaScript (barring some exceptions) have a prototype.
an object's prototype is also an object itslef.

prototype is an object, so it can also have its own prototype.

ex.
the prototpye of SoccerTeam.prototype is Object.prototype

Object.prototype.isPrototypeOf(SoccerTeam.prototype);

let liverpool = new SoccerTeam("Liverpool", "England");
liverpool.hasOwnProperty("name");


explanation of a prototype chain

1. Object (supertype for all objects in JavaScript)
supertype of SoccerTeam and liverpool
2. SoccerTeam
subtype of Object, supertype of liverpool
3. liverpool
subtype of Object and SoccerTeam

any object can use the hasOwnProperty method

*/

// -----------------------------

/* 
***** very important concept *****
Programming principle (DRY): Don't repeat yourself

repeated code is a problem because any change requires fixing code
in multiple places. more work = more room for errors

Inheritance:
creating supertypes (or parent) objects.

example of inheritance:
use case - soccer player
want to make different prototypes for each position


// subtypes (children) prototypes for each positional group

function Goalkeepr(name, position) {
    constructor: Goalkeeper,
    this.name = name;
    this.position = position;
}

function Defender(name, position) {
    constructor: Defender,
    this.name = name;
    this.position = position;
}

function Midfielder(name, position) {
    constructor: Midfielder,
    this.name = name;
    this.position = position;
}

function Forward(name, position) {
    constructor: Forward,
    this.name = name;
    this.position = position;
}


// parent prototype for a player
function SoccerPlayer() { };

SoccerPlayer.prototype = {
    constructor: SoccerPlayer,
    describe: function() {
        console.log("Shirt Number: " + this.shirtNum);
    }
};


-------------
-------------

You can also inherit behaviors from a supertype.

using ex. from above

// one way
let player = new SoccerPlayer();

// alternative way
let player = Object.create(SoccerPlayer.prototype);
Object.create(obj) creates a new object and sets obj as the new object's prototype.

*/