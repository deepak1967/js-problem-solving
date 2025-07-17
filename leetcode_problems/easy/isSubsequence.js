let s = "abc", t = "ahbgdc"
var isSubsequence = function (s, t) {
    let str = s.split("");
    let tar = t.split("");
    let count = 0;
    for (let i = 0; i < tar.length; i++) {
        if (str[count] == tar[i]) {
            count++;
        }

    }
    return count === str.length;
};

console.log(isSubsequence(s, t));
