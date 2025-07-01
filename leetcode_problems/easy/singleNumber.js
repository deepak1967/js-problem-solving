var singleNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let duplicate = false;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] === nums[j]) {
                duplicate = true;
                break
            }
        }

        if (!duplicate) {
            return nums[i];
        }
    }

    return null;
}

let arr = [3, 4, 3, 5, 6, 7, 6, 7]

console.log(singleNumber(arr));
