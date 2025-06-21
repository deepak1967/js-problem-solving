let nums = [3, 7, 2, 11, 15];


var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let num = nums[i] + nums[j]
            if (num === target) {
                return [i, j];
            }

        }
    }
};

const data = twoSum(nums, 9);
console.log(data);


