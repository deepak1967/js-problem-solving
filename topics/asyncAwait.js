// async function always return promise 

// async & await is used to handle the promise 

// await can only be used inside an async function.

// if await keyword use directly outside async function the it return syntax error.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise P1 Resolved Value!!")
    }, 10000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise P2 Resolved Value!!")
    }, 5000)
})

const API_URL = "https://api.gihub.com/users/akshaymarch7";

async function handlePromise() {
    console.log("Hello World!");

    const val1 = await p1;
    console.log("Namaste Javascript!");
    console.log(val1);

    const val2 = await p2;
    console.log("Namaste Javascript 2!");
    console.log(val2);

    // try {
    //     const data = await fetch(API_URL);
    //     const jsonValue = await data.json();
    //     console.log(jsonValue);
    // } catch (err) {
    //     console.log(err);

    // }


}

handlePromise();
