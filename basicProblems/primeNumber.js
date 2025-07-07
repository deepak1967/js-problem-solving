var isPrime = function (num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(130));

// Print prime numbers

var primeNumber = function (num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
      }
    }

    if (i > 1 && flag == 0) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(primeNumber(10));
