// notes on declarative functions

/* 
declarative functions with ES6:

it is possible to declare functions without using the function keyword

ex.
// code with function keyword
const person = {
    name: "Max",
    sayHello: function() {
        return `Hello! My name is ${this.name}.`;
    }
};

// new code without function keyword
const person = {
    name: "Max",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};


*/