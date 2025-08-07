let num = [2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];

function removeDuplicate(num) {
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] === num[j]) {
                num.splice(j, 1);
            }
        }
    }
    return num;
}

console.log(removeDuplicate(num))


let arr = [
    { id: 1, name: "deepak" },
    { id: 2, name: "lavi" },
    { id: 3, name: "pari" },
    { id: 4, name: "krishna" },
    { id: 5, name: "deepak" },

]

var removeDuplicateObject = function (arr) {

    let seen = new Set(); //stores unique values
    let uniqueArr = arr.filter(item => {
        if (seen.has(item.name)) {
            return false;
        }
        seen.add(item.name);
        return true;
    });

    return uniqueArr;
}

console.log(removeDuplicateObject(arr));
