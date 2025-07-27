let name = {
    firstName: "Deepak",
    lastName: "Singh"
}

var printFullname = function (town, state) {
    console.log(` ${this.firstName} ${this.lastName} from ${town}, ${state}`);

}

// call() – Calls the function with this set to the first argument
printFullname.call(name, "Noida", "Uttar Pradesh");

// apply() – Like call(), but arguments are passed as an array
printFullname.apply(name, ["Noida", "Uttar Pradesh"]);

// bind() – Returns a new function with this bound
let printMyName = printFullname.bind(name, "Noida", "Uttar Pradesh");

// console.log(printMyName);
printMyName();