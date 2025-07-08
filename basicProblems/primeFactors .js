var primeFactors  = function (num) {
  let counter = 2,
    arr = [];
  for (let i = 0; i < num; i++) {
    while (num % counter == 0) {
      arr.push(counter);
      num = num / counter;
    }

    counter++;
  }
  return arr;
};

console.log(primeFactors (21320));