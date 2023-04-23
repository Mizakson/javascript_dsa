// notes on comparison operators

/* 
comparison operators:

all comparison operators return a boolean value.

*/


/* 
equality operator:

most basic comparison operator

displayed using ==

returns true if values are equivalent and false if they are not.

== != =

ex.
function equalityTest(myVal) {
    if (myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}

equalityTest(10); // output = Equal
equalityTest(9); // output = Not Equal

the == operator does the type conversion of the operands before comparison

so equaltiyTest('10'); would also return Equal

3 == 3 // true
3 == '3' // true

----

strict equality operator:
three equals signs
===

the === operator compares the values as well as the data types of the operands.

3 ===  3  // true
3 === '3' // false


*/

/* 
typeof operator:

displays data type

typeof 3 // int
typeof '3' // str

*/



/* 
inequality operator:

opposite of the equality operator
exclamation mark + equals sign
!=

ex.
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false


strict inequality operator
opposite of the strict equality operator
!==

ex. 
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true


*/


/* 
greater than operator
> 

ex.
5 > 3 // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false


greater than or equal to operator
>= 

ex.
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false


*/

/* 
less than operator
<

ex.
6 < 8 // true
6 < '10' // true
8 < 4 // false
8 < '4' // false

less than or equal to operator
<=

ex.
6 <= 6 // true
6 <= '7' // true
7 <= 10 // false
7 <= '10' // false

*/


/* 
comparisons with the 'and' operator:
displayed as &&

ex.
if (num > 5 && num < 10) {
    return "Yes";
}
return "No";

the and operator is the same as nesting an if statement inside another if


comparisons with the 'or' operator:
displayed as ||

returns true if either of the operands is true. otherwise it returns false

ex.
if (num > 10 || num < 5) {
    return "No";
}
return "Yes";

*/


