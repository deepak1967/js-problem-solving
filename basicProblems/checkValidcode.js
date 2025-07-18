function isValidCode(code) {
    const pattern = /^[A-Z]{3}[0-9]{4}$/;
    return pattern.test(code);
}

function processData(data) {
    let normalizedValidCodes = [];
    let validCodes = 0;
    let invalidCodes = 0;

    for (let i = 0; i < data.length; i++) {
        if (isValidCode(data[i])) {
            normalizedValidCodes.push(data[i]);
        } else {
            invalidCodes++;
        }
    }

    normalizedValidCodes.sort();
    validCodes = normalizedValidCodes.length;

    let result = {
        totalCodes: data.length,
        validCodes: validCodes,
        invalidCodes: invalidCodes,
        normalizedValidCodes: normalizedValidCodes,
    };

    return JSON.stringify(result);
}

let arr = ["abc1234", "XYZ0001", "1233ABD", "A1B2C3D", "lmn9876", "DEF5678"];
console.log(processData(arr));

module.exports = { processData };



