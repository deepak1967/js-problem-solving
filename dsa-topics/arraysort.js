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



const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 9876543210",
        role: "Admin",
        status: "Active"
    },
    {
        id: 2,
        name: "Sarah Wilson",
        email: "sarah.wilson@example.com",
        phone: "+1 8765432109",
        role: "Manager",
        status: "Inactive"
    },
    {
        id: 3,
        name: "Michael Smith",
        email: "michael.smith@example.com",
        phone: "+1 7654321098",
        role: "User",
        status: "Active"
    },
    {
        id: 4,
        name: "Emily Johnson",
        email: "emily.johnson@example.com",
        phone: "+1 6543210987",
        role: "User",
        status: "Pending"
    },
    {
        id: 5,
        name: "David Brown",
        email: "david.brown@example.com",
        phone: "+1 5432109876",
        role: "Support",
        status: "Active"
    }
];

const arr1 = ["Blue", "Humpback", "Beluga"];
const arr2 = ["Blue", "Humpback", "Beluga"];

const sortedUser = users.sort((a, b) => b.name - a.name);
const arr3 = arr1.concat(arr2)
const arr4 = users.some((item) => item.role === 'User');

const arr5 = [9, 8, [3, 4, [5, 7]], [1, 2]]
console.log(arr5.flat(Infinity));

