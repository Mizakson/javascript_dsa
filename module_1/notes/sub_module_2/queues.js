// notes on queues

/* 
queues:
an abstract data structure where items are kept in order

new items can be added at the back of the queue
old items are taken off from the front of the queue

ex.
function nextInLine(arr, item) {
  arr.push(item); // adds item to the end of the arr
  return arr.shift(); // returns the modified arr and gets rid of the first item
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr)); // stringify turns arrays into strings (easier to display)
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

output
Before: [1,2,3,4,5,]
1
After:[2,3,4,5,6]

*/