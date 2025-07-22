// 167. Two Sum II - Input Array Is Sorted

let numbers = [2, 3, 4], target = 6


var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length;

    while (left < right) {
        let sum = numbers[left] + numbers[right]
        if (sum === target) return [left + 1, right + 1];
        else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};

console.log(twoSum(numbers, target));


var twoSum = function (numbers, target) {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                arr.push(i + 1)
                arr.push(j + 1);
            }
        }

    }
    return arr;
};

console.log(twoSum(numbers, target));
