const arr = [1, 2, 3, 4, 2, 5, 3, 4];

var printDuplicate = function (arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        // if value exist includes retrun boolean value
        if (count > 1 && !newArr.includes(arr[i])) newArr.push(arr[i]); 
    }

    return newArr;
}

console.log(printDuplicate(arr));