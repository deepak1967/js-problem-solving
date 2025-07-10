var asciiValue = function (string) {
    const result = string.charCodeAt(0);
    // OR
    // const result = string.codePointAt(0)

    return result
}

console.log(asciiValue('a'));
