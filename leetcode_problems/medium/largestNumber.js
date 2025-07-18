let nums = [0, 0];

var largestNumber = function (nums) {
    let arr = nums.sort((a, b) => {
        const order1 = `${a}${b}`;
        const order2 = `${b}${a}`;
        if (a == b) return 0;
        return order2.localeCompare(order1);
    });
    let result = arr.join("");

    if (result[0] === '0') result = '0';

    return result;
};

console.log(largestNumber(nums));
