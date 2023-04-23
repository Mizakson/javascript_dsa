// notes on conditional logic + control flow

/* 
if statements:

used to make decisions in code.

if(condition is true) {
    statement is executed
}

function test (myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}

test(true); // output = It was true
test(false); // output = It was false

*/



/* 
else statements:

allows alternate blocks of code to be executed when a previous condition is false.

ex.
if (num > 10) {
    return "Bigger than 10";
} else {
    return " 10 or less";
}


else if statements:

used for multiple conditions.

ex.
if (num > 15) {
    return "Bigger than 15";
} else if (num > 5) {
    return "Smaller than 5";
} else {
    return "Between 5 and 15";
}

*/


/* 
logical order in if/else statements:

order is important in if, else if statements.

ex. (correct order)
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

pt. 2 (incorrect order)
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}


this change in order results in different outputs.

foo(0) // output = Less than one
bar(0) // output = Less than two


----

chaining if/else statements

multiple chained statements look like this...

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}



*/


