let nums = [0, 3, 1]
var missingNumber = function (nums) {
    let arr = nums.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > i) return i
    }
    return arr.length
};

console.log(missingNumber(nums));