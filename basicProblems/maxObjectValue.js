let arr = [
    { id: 1, days: 5 },
    { id: 2, days: 3 },
    { id: 3, days: 40 },
    { id: 4, days: 10 },
    { id: 5, days: 40 },

]

var maxObjectValue = function (arr) {
    let max = Math.max(...arr.map(item => item.days));

    let res = arr.filter(item => item.days === max);
    return res;
}

console.log(maxObjectValue(arr));


