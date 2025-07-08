var largestAmongThree = function (a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};

console.log(largestAmongThree(545, 65, 655));

var largestAmongThree = function (a, b, c) {
  let greater = Math.max(a, b, c);
  return greater;
};

console.log(largestAmongThree(545, 65, 655));
