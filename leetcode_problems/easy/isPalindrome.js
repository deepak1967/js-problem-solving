s = "A man, a plan, a canal: Panama"
var isPalindrome = function (s) {
    let string = s.toLowerCase().replace(/[^a-z0-9]/g, '');    
    let reverse = string.split("").reverse().join("");
    console.log(string, reverse);
    
    return string === reverse;
};

console.log(isPalindrome(s));
