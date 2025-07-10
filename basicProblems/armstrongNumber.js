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

// console.log(armstrongNumber(1634));

var armstrongNumberPrint = function (num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let isArmstrong = arm(i);
    if (isArmstrong === true) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(armstrongNumberPrint(2000));


var armstrongNumber = function (num) {
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    let rem = temp % 10;
    sum += rem * rem * rem;
    temp = parseInt(temp / 10);
  }
  if (sum === num) {
    return true;
  } else {
    return false;
  }
}

console.log(armstrongNumber(153))
