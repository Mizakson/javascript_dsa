// notes on constructor functions

/* 
class syntax:
new syntax used to create objects, using the class keyword

----

objects in ES5...
created by defining a constructor function and using the 'new' keyword
to instantiate the object

objects in ES6...
class declaration has a constructor method that is invoked with 
the 'new' keyword
    - if the method is not explicitly defined,
    it is implicitly defined with no arguments

the class keyword declares a new function, which a constructor is added to,
the constructor is invoked when 'new' is called to create a new object

class naming conventions: UpperCamelCase

constructor method is used for creating and initializing an object created with a class.

here is some sample code
*/
// Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
    takeOff() {
        console.log("To" + this.targetPlanet + "!");
    }
}


// Implicit constructor
class Rocket {
    launch() {
        console.log("To the moon!");
    }
}

const zeus = new SpaceShuttle('Jupiter');
// prints "To Jupiter!" in console
zeus.takeOff()

const atlas = new Rocket();
// prints "To the moon!" in console
atlas.launch();

