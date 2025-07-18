let nums = [3, 4, 5, 1, 2]

var findMin = function (nums) {
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]

        }
    }
    return min
};


console.log(findMin(nums));

var findMin = function (nums) {
    let arr = [...nums]
    arr.sort((a, b) => a - b);
    let min = arr[0];
    return min
};

console.log(findMin(nums));





