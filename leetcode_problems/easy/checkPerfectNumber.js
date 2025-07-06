var checkPerfectNumber = function (num) {
  let sum = 0,
    arr = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum = sum + i;
      arr.push(i);
    }
  }

  if (sum === num) {
    return true;
  } else {
    return false;
  }
};

console.log(checkPerfectNumber(28));
