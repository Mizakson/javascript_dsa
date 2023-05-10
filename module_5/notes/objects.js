// notes on objects

// ------------------------------------------

/* 

key-value pairs in JavaScript objects:

objects are essentially key-value pairs

the unqiue identifiers (keys) are called properties
and the pieces of data are referred to as values


adding a new property...

dot notation pseudocode
objName.newPropertyName = 'newValue';

bracket notation pseudocode
objName['newPropertyName'] = 'newValue';

    using a variable instead of directly naming the property

    const propertyVar = 'newPropertyName';
    objName[propertyVar] = 'newValue';


------
------


nested objects:

just like arrays, it is possible to have nested objects.

pseudocode for setting properties
obj1.prop1.obj2.prop2 = 'newProp2Value';


------
------


its also possible to modify values using bracket notation
objName[propName] = 'newValue';


deleting object properties,
use the delete keyword

pseudocode
delete objName.removedProp;


------
------


checking if an object has a property:

there are two ways to check if an object has a specific property...

1. hasOwnProperty() method
objName.hasOwnProperty('checkedProperty');

2. 'in' keyword
'checkedProperty' in objName;

both statements return a boolean value


------
------


iterating through the keys of an object:

it is possible to iterate through the keys in an object
by using a for...in statement

for (const loopHead in objName) {
    // code here
}


------
------


Object.keys() method:
generates an array which contains all of the keys within an object,
takes the specific object as an argument.


*/