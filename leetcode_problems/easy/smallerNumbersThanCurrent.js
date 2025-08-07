let nums = [8, 1, 2, 2, 3];

var smallerNumbersThanCurrent = function (nums) {
    let counter = 0, arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                counter++;
            }
        }
        arr.push(counter)
        counter = 0;

    }
    return arr;
};

console.log(smallerNumbersThanCurrent(nums));
