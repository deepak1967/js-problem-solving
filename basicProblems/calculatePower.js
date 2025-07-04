let calculatePower = function (base, num) {
    let power = 0;
  for (let i = 0; i <= num; i++) {
    while (num % base == 0) {
      num = num / base;
      power++;
    }
  }

  return power;
};

console.log(calculatePower(3, 9));