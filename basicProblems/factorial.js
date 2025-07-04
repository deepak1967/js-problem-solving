var factorial = function (num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  return fact;
};

console.log(factorial(5));

// factorial using recursion (call itself)

var factor = function (num) {
  if (num === 0) return 1;
  return num * factor(num - 1);
};

console.log(factor(4));
