let arr = ['apple', 'banana', 'grapes'];

let person = {
    name: "Deepak",
    age: 25
}

arr.push(person);
arr.push('orange');
arr.pop();
arr.pop();

arr.unshift('orange');
arr.shift();

// console.log(arr);

// Loop in Array

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

let i = 0;

while (i < arr.length) {
    // console.log(arr[i]);
    i++;
}

// Inbuilt Loop Methods

const number = [2, 4, 5, 7, 9, 8];

number.map((item, index, array) => {
    // console.log(item, index, array);
    return item + 5;
});

number.filter((item, index, array) => {
    // console.log(item, index, array);
    return item > 5;
});

const sum = number.reduce((prev, item) => {
    return prev + item;
}, 1);

console.log(sum);


