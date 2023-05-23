// 2nd file with more in-depth notes on intermediate algorithms, with new dividers

/* 
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________

*/



/* 
algorithm 9/21:

 scenario...

 pass an array(s) through a function that returns only the first occurences
 of the values in order, in a separate array

*/

function uniteUnique(arr) {

// declare constants

/* 
1. args
is an array containing all of the arguments

2. finalArr
result array after the check is performed
*/
const args = [...arguments];
const finalArr = [];



// nested for loop, checking if a value is unique

/* 
first layer: for (let i = 0; i < args.length; i++)
- iterates through the args array

second layer: for (let j = 0; j < args[i].length; j++)
- iterates through the sub arrays

if statement: if (!finalArr.includes(args[i][j]))
- if the finalArr does not include the specific value... gets rid of repeats
finalArr.push(args[i][j]),
appending non-repeating values to finalArr

*/

for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
    if (!finalArr.includes(args[i][j])) {
        finalArr.push(args[i][j]);
        }
    }
}

return finalArr;
}



/* 
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________
_________________________________________________________________________________________________

*/

