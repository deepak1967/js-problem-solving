let nums = [1, 2, 3, 4, 5, 6, 7], k = 3

var rotate = function (nums, k) {
    k = k % nums.length;
    let rotated = nums.slice(-k).concat(nums.slice(0, nums.length - k));

    for (let i = 0; i < nums.length; i++) {
        nums[i] = rotated[i];
    }

    return nums;
};

console.log(rotate(nums, k));


var rotate = function (nums, k) {
    let count = 0;
    while (count < k) {
        nums.unshift(nums.pop());
        count++;
    }

    return nums;
};

// console.log(rotate(nums, k));

var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
};

// console.log(rotate(nums, k));

