let days =  ["sunday", "tuesday", "wednesday", "thursday"];

let i1 = days.findIndex(day => day === 'wednesday'); // 2
let i2 = days.findIndex(day => day === 'monday'); // -1
let value = days.find(day => day === 'wednesday'); // wednesday (return value or object)
let isAvailable = days.some(day => day === 'wednesday'); // true
let newArr = days.map(item => item.toUpperCase());


console.log(i1, i2, value, isAvailable, newArr, filterArr);
