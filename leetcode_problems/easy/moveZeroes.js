let nums = [0, 0, 1];
var moveZeroes = function (nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--
            count++;
            if (count > nums.length) break;
        }

    }
    return nums
};

console.log(moveZeroes(nums));


