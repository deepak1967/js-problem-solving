// fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21......

var fib = function (n) {
    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}

console.log(fib(10));



var fib = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}


var fib = (n) => n <= 1 ? n : fib(n - 1) + fib(n - 2);


console.log(fib(3));


