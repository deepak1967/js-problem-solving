const arr = [1, "c", "deepak", 4, "f"];

const num = []
const char = []
const str = []

arr.forEach((item) => {
    if (typeof item === "number") {
        num.push(item)
    }
    else if (typeof item === "string" && item.length > 1) {
        str.push(item)
    } else {
        char.push(item)
    }

})

console.log(num)
console.log(str)
console.log(char)