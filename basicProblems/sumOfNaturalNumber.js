var sumOfNaturalNumber = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumOfNaturalNumber(4));


// Using recursion

var sumOfNaturalNumber = function (num) {
  if (num === 0) return 0;
  return num + sumOfNaturalNumber(num - 1);
};

console.log(sumOfNaturalNumber(4));
