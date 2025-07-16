// Anagram is making another word use the same alphabetic letters

var isAnagram = function (s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s === t;
};

console.log(isAnagram("car", "rac"));

var isAnagram = function (str1, str2) {
    let s1 = str1.split("");
    let s2 = str2.split("");

    for (let i = 0; i < s1.length && i < s2.length; i++) {
        for (let j = i + 1; j < s1.length && j < s2.length; j++) {
            if (s1[i] > s1[j]) {
                let temp = s1[i];
                s1[i] = s1[j];
                s1[j] = temp
            }
            if (s2[i] > s2[j]) {
                let temp = s2[i];
                s2[i] = s2[j];
                s2[j] = temp
            }
        }

    }

    return s1.join("") === s2.join("");
}

console.log(isAnagram("deepak", "kapdee"));
