let s = "   fly me   to   the moon  ";
var lengthOfLastWord = function (s) {

  let arr = s.match(/\S+/g);
  let length = arr[arr.length - 1].length;

  return length
};

console.log(lengthOfLastWord(s));
