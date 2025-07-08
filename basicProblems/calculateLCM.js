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
