let  s = "Let's take LeetCode contest"

var reverseWords = function(s) {
    let str = s.split(" ");
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let res = str[i].split("").reverse().join("");
        arr.push(res);
        
    }
    return arr.join(" ");
};

console.log(reverseWords(s));
