let calculateHCF = function (num1, num2) {
  let arr = [];
  let hcf = 1, count = 1;
  for (let i = 0; i < num1 || i < num2; i++) {
    if (num1 % count == 0 && num2 % count == 0) {
      num1 = num1 / count;
      num2 = num2 / count;
      arr.push(count);
      hcf = hcf * count
    }
    count++;
  }
  return hcf;
};

console.log(calculateHCF(3, 6));
