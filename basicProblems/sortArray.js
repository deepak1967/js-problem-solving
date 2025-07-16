let arr = [4, 5, 2, 1, 7, 6, 9, 8];
let str = ["lavi", "pari", "krishna", "deepak", "poonam", "ramesh"];
var arrSort = function (array) {
    // let arr = s.split("");  // for single string
    let arr = array;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {       // operator change for descending
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;

}

console.log(arrSort(str));
