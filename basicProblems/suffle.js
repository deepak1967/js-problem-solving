let arr = [1, 2, 3, 4];
var suffle = function (arr) {
    let i = arr.length, j, temp;

    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(suffle(arr));

