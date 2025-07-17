let s = "codeleet", indices = [4, 5, 6, 7, 0, 2, 1, 3];

var restoreString = function (s, indices) {
    let str = s.split("");

    let combined = indices.map((indices, index) => {
        return { indices: indices, str: str[index] };

    });
    combined.sort((a, b) => a.indices - b.indices);
    const string = combined.map(el => el.str)
    console.log(string);
    return string.join("")

};

console.log(restoreString(s, indices));
