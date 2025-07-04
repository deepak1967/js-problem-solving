var calculatePower = function (base, num) {
  let power = 0;
  for (let i = 0; i <= num; i++) {
    while (num % base == 0) {
      num = num / base;
      power++;
    }
  }

  return power;
};

console.log(calculatePower(3, 81));

// calculate power using recursion

var calculatePower = function (base, power) {
  if (power === 0) return 1;
  return base * calculatePower(base, power - 1);
};

console.log(calculatePower(3, 4));

// calculate power using Math function

var calculatePower = function (base, power) {
  let num = Math.pow(base, power);
  return num;
};

console.log(calculatePower(3, 4));
