let nums = [20, 30, 50, 60];

var arrayAvg = function (nums) {
  let avg,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  avg = sum / nums.length;
  return avg;
};

console.log(arrayAvg(nums));

