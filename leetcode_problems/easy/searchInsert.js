let nums = [1, 3, 5, 6], target = 2
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};

console.log(searchInsert(nums, target));
