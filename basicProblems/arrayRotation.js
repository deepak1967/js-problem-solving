let array = [1, 2, 3, 4, 5]

function rotate(array, n) {
    let arr = [];
    n = n % array.length;
    if (n >= 0) {
        // Rotate right
        let leftArr = array.slice(0, array.length - n);
        let rightArr = array.slice(array.length - n);
        arr = [...rightArr, ...leftArr];
    }

    if (n < 0) {
        // Rotate left
        let leftArr = array.slice(0, -n);
        let rightArr = array.slice(-n);
        arr = [...rightArr, ...leftArr];
    }

    return arr;
}

console.log(rotate(array, -5));
