// notes on recursion

// countdown program

function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1); // this is where the recursion occurs
      arr.unshift(n); // performing the array operation
      return arr;
    }
  }



// creating a range of numbers
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
    return [];
    } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
    }
  };