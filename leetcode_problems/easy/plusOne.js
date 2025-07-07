let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
var plusOne = function (digits) {
  const digit = digits.join("");
  const plusOne = BigInt(digit) + 1n;
//   const plusOne = +digit + 1; // BUt its not work big digits

  const arr = plusOne.toString().split("");

  const numArr = arr.map((el) => el * 1);
  return numArr;
};

console.log(plusOne(digits));
