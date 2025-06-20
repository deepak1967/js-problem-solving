let nums = [2,7,11,15];

let counter = 0;

var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            counter ++;
            if (i === j) continue;
            if (num = nums[i] + nums[j] === target) {
                console.log(`Loop ran ${counter} times`);
                return [i, j];
            }

        }
    }
};

const data = twoSum(nums, 9);
console.log(data);


