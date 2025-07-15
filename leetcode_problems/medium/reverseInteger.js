var reverse = function (x) {
  const MIN = -Math.pow(2, 31);
  const MAX = Math.pow(2, 31) - 1;

  let num = Math.abs(x), res, arr = [];

  let str = num.toString().split("")
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  res = +arr.join("");
  if (x < 0) res = res * -1;

  if (res < MIN || res > MAX) return 0;

  return res;
};

console.log(reverse(-623));
