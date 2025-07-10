var binary = function (num) {
    let rem, bin = 0, i = 1;
    while (num != 0) {
        rem = num % 2;
        num = parseInt(num / 2);

        bin = bin + rem * i;
        i = i * 10;
    }

    return bin;
}

console.log(binary(16))

var binary = function (num) {
    let rem, arr = [], bin, i = 1;
    while (num != 0) {
        rem = num % 2;
        num = parseInt(num / 2);
        arr.unshift(rem);
        bin = arr.join('');
    }
    return +bin;
}

console.log(binary(10));


var binary = function (num) {
    let bin = '';
    while (num > 0) {
        bin = (num % 2) + bin;
        num = Math.floor(num / 2);
    }
    return +bin;
}

console.log(binary(16))