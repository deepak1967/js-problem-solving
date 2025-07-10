var calculateHCF = function (num1, num2) {
  let hcf = 1
  for (let i = 0; i < num1 || i < num2; i++) {

    if (num1 % i == 0 && num2 % i == 0) {
      hcf = i;
    }
  }
  return hcf;
};

console.log(calculateHCF(12, 18));

var calculateHCF = function (a, b) {
  let max = a > b ? a : b;
  let min = a > b ? b : a;
  let hcf = 1,
    rem = 1;
  for (let i = 0; i <= min; i++) {
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
  return hcf;
};

console.log(calculateHCF(3, 6));
