# Utility Functions Package

This package provides a collection of utility functions for common tasks in JavaScript.

## Installation

Install the package using npm:

```bash
npm install utility-functions
```

## Usage

1. Require the package in your Node.js application:

```javascript
const { isEven, isOdd, factorial } = require('utility-functions');
```

2. Use the utility functions in your code:

```javascript
console.log(isEven(4)); // true
console.log(isOdd(4)); // false
console.log(factorial(5)); // 120
```

## Available Functions

### isEven(num)

Returns `true` if the given number is even, otherwise returns `false`.

### isOdd(num)

Returns `true` if the given number is odd, otherwise returns `false`.

### factorial(num)

Calculates the factorial of the given number and returns the result.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
