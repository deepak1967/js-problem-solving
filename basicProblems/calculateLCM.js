// Formula: LCM(a, b) = (a * b) / HCF(a, b);

var calculateLCM = function (a, b) {
  let hcf = 1
  for (let i = 0; i < a || i < b; i++) {

    if (a % i == 0 && b % i == 0) {
      hcf = i;
    }
  }
  lcm = (a * b) / hcf;
  return lcm;
};

console.log(calculateLCM(12, 15));


var calculateLCM = function (num1, num2) {
  let min = (num1 > num2) ? num1 : num2;
  while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
      break;
    }
    min++;
  }
  return min;
};

console.log(calculateLCM(12, 15));
