
let nums = [4, 3, 2, 6];

var maxRotateFunction = function (nums) {
    let n = nums.length;
    let totalSum = 0, F = 0;

    for (let i = 0; i < n; i++) {
        totalSum += nums[i];
        F += i * nums[i];
    }

    console.log(F, totalSum);


    let max = F;
    for (let i = n - 1; i >= 1; i--) {
        F = F + totalSum - n * nums[i];
        max = Math.max(max, F);
    }

    return max;
};

console.log(maxRotateFunction(nums));

var maxRotateFunction = function (nums) {
    let arr = [];
    let k = 0;
    while (k < nums.length) {
        let sum = 0
        for (let i = 0; i < nums.length; i++) {
            sum += i * nums[i];
        }
        arr.push(sum);
        k++
        nums = nums.slice(-1).concat(nums.slice(0, nums.length - 1));
    }
    let max = arr.reduce((a, b) => Math.max(a, b));
    return max;
};

console.log(maxRotateFunction(nums));






