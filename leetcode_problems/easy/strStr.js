let haystack = "hello",
  needle = "ll";

var strStr = function (haystack, needle) {
  let index = haystack.indexOf(needle);

  if (index === -1) return -1;

  return index;
};

console.log(strStr(haystack, needle));
