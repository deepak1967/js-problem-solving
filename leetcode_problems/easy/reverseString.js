let s = ["h", "e", "l", "l", "o"]
var reverseString = function (s) {
    let str = s.reverse();
    return str;
};

console.log(reverseString(s));

var reverseString = function (s) {

    for (let i = s.length - 1; i >= 0; i--) {
        s[i];
    }
    return s;
};

console.log(reverseString(s));
