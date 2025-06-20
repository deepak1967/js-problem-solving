// fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21......

// var fib = function (n) {
//     const arr = [0, 1];
//     for (let i = 2; i < 10; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//         arr.push(arr[i]);
//     }
//     return arr[n];
// }

//  OR 

// var fib = (n) => {
//     if(n<=1) return n;
//     return fib(n-1) + fib(n-2);
// }

//  OR 

var fib = (n) => n<=1 ? n: fib(n-1) + fib(n-2);


console.log(fib(3));


