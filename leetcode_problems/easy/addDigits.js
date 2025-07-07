var addDigits = function (num) {
  while (num >= 10) {
    let sum = 0;
    let arr = num.toString().split(""),
      numArray = arr.map(Number);
    for (let i = 0; i < numArray.length; i++) {
      sum = sum + numArray[i];
    }
    num = sum;
  }

  return num;
};

const data = addDigits(38);
console.log(data);
