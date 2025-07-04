let nums = [20, 30, 50, 60];

var arrayAvg = function (nums) {
  let avg,
    count = 0,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    count++;
  }

  avg = sum / count;
  return avg;
};

console.log(arrayAvg(nums));

