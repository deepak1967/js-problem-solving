let nums = [3, 17, 19, 11, 45];


var maxNumber = function (nums) {
    let num = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (num < nums[i + 1]) {
            num = nums[i + 1];
        }
    }
    return num;
};

const data = maxNumber(nums);
console.log(data);


