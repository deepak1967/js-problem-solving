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
