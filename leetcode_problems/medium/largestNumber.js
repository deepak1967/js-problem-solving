let nums = [3, 30, 34, 5, 9];

var largestNumber = function (nums) {
    let arr = nums.sort((a, b) => {
        const order1 = `${a}${b}`;
        const order2 = `${b}${a}`;
        return order2.localeCompare(order1);
    });

    return arr.join("");
};

console.log(largestNumber(nums));
