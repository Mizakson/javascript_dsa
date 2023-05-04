// longer regex restricting usernames based off of conditions
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d+\d$/gi; // Change this line
let result = userCheck.test(username);

/* 
breaking down the regex:

1. ^
- the start of the input

2. [a-z] 
- first char is a letter

3. [a-z]+
- following chars are letters

4. \d*$
- input ends with 0 or more digits

5. |
- or

6. ^[a-z]
- first char is a letter

7. \d\d+
- following chars are two or more digits

8. $
- end of the input

9. gi
- flags at the end of the regex
- global, ignore case sensitivity

global flag is optional

*/