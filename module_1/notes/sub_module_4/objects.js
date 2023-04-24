// notes on JavaScript objects

/* 
building objects:

objects are similar to arrays,
but instead of using indexes to access and modify data,
you access the data through properties.

useful for storing data in a structured way and can represent real world objects.

ex.
const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["water", "Dogs"]
};

you can also use numbers as properties like this...

const car = {
    make: "Ford",
    5: "five",
    "model": "focus"
};

any non-string properties will be typecast as strings

*/


/* 
accessing object properties with dot notation:

there are two ways to access object properties...

using dot notation (.) or bracket notation ([])


const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1; // example of dot notation
const prop2val = myObj.prop2;


now with bracket notation...
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];


*/


/* 
accessing object properties with Variables

you can create variables to store access to certain properties

ex.
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;  // new variable
const player = testObj[playerNumber];   // still refers to 16 in testObj, returning "Montana"



*/


/* 
updating object properties:

here is an example
just put the new value after an = operator and the property you want to update

const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};


myDog.name = "Happy Coder"; // using dot notation

*/


/* 
adding object properties:

using dot notation...
objName.newProperty = "newValue";

using bracket notation...
objName["newProperty"] = "newValue";


deleting object properties:

pseudocode...
delete objName.deleteThisProperty;


*/


/* 
using objects for lookups:

objects have key/value storage, like a dictionary.
therefore you can lookup values instead of using a switch or if/else statement.

ex.
const article = {
  "title": "How to create objects in JavaScript",
  "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  "author": "Kaashan Hussain",
  "language": "JavaScript",
  "tags": "TECHNOLOGY",
  "createdAt": "NOVEMBER 28, 2018"
};

const articleAuthor = article["author"]; // variable that stores the property lookup statement for author
const articleLink = article["link"]; // variable that stores the property lookup statement for the link

const value = "title"; // prints the word title
const valueLookup = article[value]; // pseudocode to lookup a property from an object (in this case obj = article)


another ex.
function phoneticLookup(val) {
  let result = "";

  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
    "": undefined

  }

  result = lookup[val];

  return result;
}

*/


/* 
testing objects for properties:

use the hasOwnProperty() method.


pseudocode
myObj.hasOwnProperty(propname);


ex.
function checkObj(obj, checkProp) {
  
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }

  
}

*/



/* 
manipulating complex objects:




*/


