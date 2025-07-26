// "The Promise object represents the eventual completion of an asynchronous operation and returns a value, whether it succeeds or fails."

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Success"), 3000);
    // setTimeout(() => reject("P1 Fail"), 3000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 Success"), 1000);
    // setTimeout(() => reject("P2 Fail"), 1000);
});

let p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P3 Success"), 2000);
    setTimeout(() => reject("P3 Fail"), 2000);
});

// Promise.all() – Waits for all promises to fulfill; rejects if any one reject then immediate return fail.

Promise.all([p1, p2, p3]).then((res) => {
    console.log("all ", res);

}).catch((error) => {
    console.error("all ", error);
})

// Promise.allSettled() – Waits for all promises to settle (fulfill or reject).

Promise.allSettled([p1, p2, p3]).then((res) => {
    console.log("all settled", res);

}).catch((error) => {
    console.error("all settled", error);
})

// Promise.race() – Resolves or rejects with the first settled promise (fulfill or reject).

Promise.race([p1, p2, p3]).then((res) => {
    console.log("race ",res);

}).catch((error) => {
    console.error("race ", error);
})

// Promise.any() – Resolves with the first fulfilled promise; rejects if all fail.

Promise.any([p1, p2, p3]).then((res) => {
    console.log("any ",res);

}).catch((error) => {
    console.error("any ", error);
})