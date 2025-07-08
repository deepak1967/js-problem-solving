var calculateHCF = function (num1, num2) {
  let arr = [];
  let hcf = 1,
    count = 1;
  for (let i = 0; i < num1 || i < num2; i++) {
    if (num1 % count == 0 && num2 % count == 0) {
      num1 = num1 / count;
      num2 = num2 / count;
      arr.push(count);
      hcf = hcf * count;
    }
    count++;
  }
  return hcf;
};

console.log(calculateHCF(3, 6));

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
