var binaryToDecimal = function (num) {
    let n = num.toString().split("").reverse();
    let result = 0;

    for (let i = 0; i < n.length; i++) {
        const number = n[i] * Math.pow(2, i);
        result += number
    }
    console.log(typeof (result));

    return result
}

console.log(binaryToDecimal(1101));