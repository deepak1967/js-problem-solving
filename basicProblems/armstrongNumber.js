// An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits.
// 153 → 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

var armstrongNumber = function (num) {
  let arr = num.toString().split("");
  let sum = 0;
  let power = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let number = Math.pow(+arr[i], power);
    sum += number;
  }

  if (sum === num) {
    return true;
  } else {
    return false;
  }
};

console.log(armstrongNumber(1634));
