var isPalindrome = function (num) {
   const number = +num.toString().split("").reverse().join("");
   return number === num
};

console.log(isPalindrome(121));

var isPalindrome = function (string) {
   const str = string.split("").reverse().join("");
   return str === string
};

console.log(isPalindrome("nitin"));

var isPalindrome = function (string) {
   let str = string;
   let arr = [];

   for (let i = str.length - 1; i >= 0; i--) {
      arr.push(str[i])
   }

   const joinStr = arr.join("");

   return string === joinStr;

};

console.log(isPalindrome("nitin"));

