let nums = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
    let arr = nums.sort((a, b) => a - b);
    return arr
};

console.log(sortColors(nums));

var sortColors = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums
};
console.log(sortColors(nums));
