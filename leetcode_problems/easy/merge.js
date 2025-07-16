let nums1 = [0], m = 0, nums2 = [1], n = 1

var merge = function (nums1, m, nums2, n) {
    let arr = [];
    for (let i = 0; i < m; i++) {
        arr.push(nums1[i])
    }
    for (let i = 0; i < n; i++) {
        arr.push(nums2[i])
    }

    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        nums1[i] = arr[i];

    }
    return arr
};

console.log(merge(nums1, m, nums2, n));