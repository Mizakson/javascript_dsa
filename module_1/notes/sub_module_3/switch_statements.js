// notes on switch statements

/* 
switch statements:

used if you need to match one value against many options.
compares the value to the case statements which define various possible values.

any valid JavaScript statement can be executed in a case block,
running from the first case value until a break.

ex.
switch (fruit) {
    case "apple":
        console.log("The fruit is an apple");
        break;
    case "orange":
        console.log("The fruit is an orange")
        break;
}

case values are tested using the strict equality operator (===).

break tells JavaScript to stop executing statements.


ex 2.
function caseInSwitch(val) {
  let answer = "";

  switch (val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
  }

  return answer;
}

another switch statement with multiple cases and uses integers to name them.

*/


/* 
default options in switch statements:

sometimes it might not be feasible to specify all possible values as case statements.

default statements can be added, which will be executed if no matching case statements
are found.

default statements are like the final else statement in an if/else chain

ex. (pseudocode)
switch (num) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
...
    default:
        defaultStatement;
        break;
}

another ex.
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    
    default:
      answer = "stuff";
      break;
  }

  return answer;
}

*/


/* 
multiple identical options in switch statements:

if you have multiple inputs with the same output
(switch statements w/ the same value)
here is the syntax...
just omit the break statements

let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

*/


/* 
replacing if/else chains with switch.

if/else ex.
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}

changing if/else to switch.
switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";


more practice...
function chainToSwitch(val) {
  let answer = "";

  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    case "John":
    case 156:
      answer = "";
      break;   
      
  }

  return answer;
}

*/



