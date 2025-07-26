// Currying is the process of converting a function with multiple arguments into a series of functions that each take one argument.

var currying = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

console.log(currying(1)(2)(3));

var currying = a => b => c => a * b * c;

console.log(currying(1)(2)(3));

// Infinite Currying: A function that keeps returning functions to take arguments until a final call ends the chain and returns a result.

function add(a) {
  return function next(b) {
    if (b === undefined) return a;
    a += b;
    return next;
  };
}
console.log(add(1)(2)(3)(4)(5)()); // Output: 15

