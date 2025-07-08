// Formula: LCM(a, b) = (a * b) / HCF(a, b);

var calculateLCM = function (a, b) {
  let max = a > b ? a : b;
  let min = a > b ? b : a;
  let hcf = 1,
    rem = 1,
    lcm = 1;
  for (let i = 0; i <= min || i <= max; i++) {
    if (max % min != 0) {
      rem = max % min;
      max = min;
      min = rem;
      hcf *= rem;
    } else {
      hcf = min;
      return hcf;
    }
  }
  lcm = (a * b) / hcf;
  return lcm;
};

var calculateLCM = function (num1, num2) {
  let count = 2,
    lcm = 1;
  while (count <= num1 && count <= num2) {
    for (let i = 0; i <= num1 && i <= num2; i++) {
      if (num1 % count == 0 || num2 % count == 0) {
        if (num1 % count == 0) num1 = num1 / count;
        if (num2 % count == 0) num2 = num2 / count;
        lcm *= count;
      }
    }
    count++;
  }
  return lcm;
};

console.log(calculateLCM(100, 80));
