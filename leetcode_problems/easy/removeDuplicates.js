let nums = [0, 0, 1, 1, 1, 2, 3, 3, 4];


var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        i++;
        nums[i] = nums[j]
      }
    }
  return i + 1;
};


var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
      }
    }
  }
  return nums;
};

console.log(removeDuplicates(nums));




