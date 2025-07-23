let str1 = "deepak";
let str2 = "kumar";

var mergeStringAlt = function (str1, str2) {
    let str3 = "";
    for (let i = 0; i < str1.length || i < str2.length; i++) {
        if (i < str1.length) str3 = str3 + str1[i];
        if (i < str2.length) str3 = str3 + str2[i];

    }
    return str3;
}

console.log(mergeStringAlt(str1, str2));
