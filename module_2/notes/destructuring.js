// notes on destructuring

/* 
destructuring assignment
- different way of structuring variable, value assignment

case 1:
to neatly extract values from objects...

const user = {name: 'John Doe', age: 34};

const name = user.name
const age = user.age

// now using destructuring syntax

const {name, age } = user;
// same as the above code


case 2:
to assign variables from objects...


const user = {name: 'John Doe', age: 34};

// put the new variable name after the colon in the assignment statement
const { name: userName, age: userAge } = user;



case 3:
assigning variable from nested objects...

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
// nested object

const { johnDoe: { age: userAge, email: userEmail }} = user;

pseudocode
const { outerObj: {innerObjProp1: varName1, innerObjProp2: varName2} } = user;



case 4:
to assign variables from arrays...

// use commoas to reach desired index

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // a = 1 , b = 2, c = 5

let a = 8, b = 6;

const val = [a, b] = [b, a];
// swapping the values



case 5:
destructuring via rest elements...

to put the rest of the elements in a separate array

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

output = 
1, 2 
[3, 4, 5, 6, 7]


case 6:
to pass an object as a function's parameters


const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}

// using destructuring

const profileUpdate = ({ name, age, nationality, location }) => {

}


another ex.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// destructured
const half = ({ max, min }) => (max + min) / 2.0;

// insted of 
const half = (stats) => (stats.max + stats.min) / 2.0; 


*/