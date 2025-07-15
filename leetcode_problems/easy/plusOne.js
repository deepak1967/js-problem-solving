let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
var plusOne = function (digits) {
  const digit = digits.join("");
  const plusOne = BigInt(digit) + 1n;
//   const plusOne = +digit + 1; // But its not work big digits

  const arr = plusOne.toString().split("");

  const numArr = arr.map((el) => el * 1);
  return numArr;
};

console.log(plusOne(digits));


var plusOne = function (digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = Math.floor(sum / 10)
        if (carry === 0) break;

    }
    if (carry > 0) {
        digits.unshift(carry);
    }
    return digits
};

console.log(plusOne(digits));
