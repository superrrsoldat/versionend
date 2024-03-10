// utility-functions.js

// Function to check if a number is even
function isEven(num) {
    return num % 2 === 0;
  }
  
  // Function to check if a number is odd
  function isOdd(num) {
    return num % 2 !== 0;
  }
  
  // Function to calculate the factorial of a number
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  
  // Exporting utility functions
  module.exports = {
    isEven,
    isOdd,
    factorial
  };
  