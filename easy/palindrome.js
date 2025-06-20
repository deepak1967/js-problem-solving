var isPalindrome = function (x) {
   const num = +x.toString().split("").reverse().join("");    
   return num === x
};

const data = isPalindrome(124);
console.log(data);
