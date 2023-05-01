// notes on modules

/* 
in order to modularize JavaScript code you need
to create a script in your HTML document with the type = module

pseudocode:
<script type="module" src="filename.js"></script>

*/


/* 
using export to share a code block
to use code in different JavaScript files, you first need 
to export the code

there are three ways to export code
// using a sample const + arrow function

1.
export const add = (x, y) => {
    return x + y;
}

2.
const add = (x, y) => {
  return x + y;
}

export { add };

3.
export { add, subtract };

--------
--------

export fallback with export default:

export default statements are used if only one value
is being exported from a file.
also used to create a fallback value for a file or module

ex.

// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}



*/



/* 
reuse code with import statements:

imoprt allows you to reuse JavaScript code in a different
JavaScript file.

pseudocode...

import desiredCode as desiredCodeName from codeLocation;

ex.
import { add } from './math_functions.js';



use * to import everything from a file

ex.
import * as myMathModule from "./math_functions.js";


------
------

imoprting a default export

don't use curly braces

ex.
import add from "./math_functions.js";



*/