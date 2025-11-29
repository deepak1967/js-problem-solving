const timer = 30 * 1000;
const arr = [];
let count = 0;

const interval = setInterval(() => {
    count++;
    arr.push(count);
    console.log(count)
}, 2000);

setTimeout(() => {
    console.log("Result ", arr)
    clearInterval(interval)
}, timer)
