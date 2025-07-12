var romanToInt = function (s) {
  let sum = 0;

  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  for (let i = 0; i < s.length; i++) {
    let current = roman[s[i]];
    let next = roman[s[i + 1]]
    if (current < next) {
      sum -= current;
    } else {
      sum += current;
    }
  }

  return sum;
};

console.log(romanToInt("XIX"));