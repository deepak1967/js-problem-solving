
var addBinary = function (a, b) {
  if (a == 0 && b == 0) return '0'
  let num1 = binaryToDecimal(+a);
  let num2 = binaryToDecimal(+b);

  let sum = decimalToBinary(num1 + num2);

  let res = sum.toString();
  console.log(typeof(num1));
  

  return res;
}

var decimalToBinary = function (num) {
  let bin = '', arr = [];
  while (num != 0) {
    let rem = num % 2;
    num = Math.floor(num / 2);
    arr.unshift(rem);
    bin = arr.join("");

  }
  return +bin;
}

var binaryToDecimal = function (num) {
  let n = num.toString().split("").reverse();
  let result = 0;

  for (let i = 0; i < n.length; i++) {
    const number = n[i] * Math.pow(2, i);
    result += number
  }

  return result
}

console.log(addBinary("1101", "1111"));




