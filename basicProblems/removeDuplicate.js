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
