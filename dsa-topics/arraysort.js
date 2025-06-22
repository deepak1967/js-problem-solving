let simpleArray = [5, 4, 1, 2, 3];
let arrayOfObject = [{ "x": 1 }, { "x": 0 }, { "x": -1 }];
let arrayOfArray = [[3, 4], [5, 2], [10, 1]]


var arraySort = function (arr, fn) {
    return fn(arr);
}

var simpleArraySort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

var arrayOfObjectSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].x > arr[j].x) {
                let temp = arr[i].x;
                arr[i].x = arr[j].x;
                arr[j].x = temp;
            }
        }
    }
    return arr;
}



var arrayOfArraySort = function (arr) {
    for (let k = 0; k < arr.length; k++) {
        for (let i = 0; i < arr[k].length; i++) {
            for (let j = i + 1; j < arr[k].length; j++) {
                if (arr[k][i] > arr[k][j]) {
                    let temp = arr[k][i];
                    arr[k][i] = arr[k][j];
                    arr[k][j] = temp;
                }
            }
        }
    }
    return arr;
}
