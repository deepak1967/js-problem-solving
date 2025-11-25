const str = "my name is deepak";

const arr = str.split(' ').join("");
let count = {};

for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    count[val] = (count[val] || 0) + 1;
}

console.log(count)

