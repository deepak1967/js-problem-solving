let arr = [0, 1, 2, 2, 3, 0, 4, 2];

var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (val !== nums[j]) {
        nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

var removeElement = function (nums, val) {
  for (let i =  nums.length -1; i > 0; i--) {
    if (val === nums[i]) {
      nums.splice(i, 1);
    }
  }
  return nums;
};



console.log(removeElement(arr, 2));
