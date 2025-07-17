
let dividend = -2147483648, divisor = -1;
var divide = function (dividend, divisor) {
    const INT_MAX = Math.pow(2, 31) - 1;
    let result = parseInt(dividend / divisor);

    if (result > INT_MAX) return INT_MAX;

    return result;
};

console.log(divide(dividend, divisor));
