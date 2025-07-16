let arr = [1, 2, 3, 4, 5];

var rotateLeft = function (d, arr) {
    let num = [...arr];
    num.splice(0, d);

    for (let i = 0; i < d; i++) {
        num.push(arr[i]);
    }

    return num;
}



console.log(rotateLeft(4, arr));

var rotateLeft = function (d, arr) {
    const n = arr.length;
    d = d % n;

    return arr.slice(d).concat(arr.splice(0, d));
}



console.log(rotateLeft(4, arr));
