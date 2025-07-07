// Big O Notation:- It is a way to measure how fast or how much memory a program uses as the input gets bigger.

// ---------------------------------------------------------------------------------------------

// 1. Time Complexity (Speed):- This tells us how much time an algorithm takes based on the size of the input.

function someOperations(n) {
    // 3 Operations => O(1)     
    // It doesn't change with respect to n. It have good time complexity.
    return (n * (n + 5) / 2);
}

// console.log(someOperations(5)); 

// ---------------------------------------------------------------------------------------------

function goingUpDown(n) {
    // 2n + 3 Operations => O(n)    
    // It change with respect to n. It have better time complexity
    console.log("Going Forward!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the end, Going back!");

    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("At the start!");
}

// console.log(goingUpDown(5));

// ---------------------------------------------------------------------------------------------

function printBoth(n) {
    // n * n Operations => O(n^2)    
    // It also change with respect to n. It have bad time complexity
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }

    }
}

// console.log(printBoth(2));

// ---------------------------------------------------------------------------------------------

// 2. Space Complexity (Memory):- This tells us how much memory is used as the input grows.

function funnyNumber(array) {
    // O(1) => Space Complexity
    // It doesn't change with respect to n. It have good space complexity
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];

    }
    return sum;
}

// console.log(funnyNumber([2, 3, 9, 6, 12]));

// ---------------------------------------------------------------------------------------------

function funnyNumberArray(n) {
    // O(n) => Space Complexity
    // It change with respect to n. It have better space complexity
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(i * 65)
    }
    return array;
}

// console.log(funnyNumberArray(5));

// ---------------------------------------------------------------------------------------------

function createMatrix(n){
     // O(n^2) => Space Complexity
    // It change with respect to n. It have bad space complexity
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = []
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i + j;
        }
    }
    return matrix;
}

console.log(createMatrix(4));
