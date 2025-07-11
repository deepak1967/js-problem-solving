// A closure is a function that remembers its outer scope, even after the outer function has finished executing.



var outerFunction = function () {
    let outerVariable = 'I am from outer scope';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

outerFunction();


var closureFunc = function () {
    let count = 0;
    function innerFunction() {
        count++;
        console.log(`count is ${count}`);
    }
    return innerFunction;
}
const counter = closureFunc();

counter();
counter();
counter();


