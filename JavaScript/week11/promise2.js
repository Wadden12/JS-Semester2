// let p = new Promise(function (resolve, reject) {
//   let x = 5 + 5; //any calculation or bringing data fron an API...
//   if (x === 10) {
//     resolve("Success!!!");
//   } else {
//     reject("Failed");
//   }
// });
// p.then(function (message) {
//   console.log("This is in the then of the promise " + message);
// }).catch(function (message) {
//   console.log("This is in the catch " + message);
// });
let p = new Promise((resolve, reject) => {
    let a = Math.floor(Math.random() * 10);
    console.log(a);
    if (a > 5) {
        resolve("Number is greater than 5");
    } else {
        reject("Number is less than 5");
    }
});
p.then((message) => {
    console.log(
        "YOu have successfully generated a number greater than 5 " + message
    );
}).catch((message) => {
    console.log(
        "Sorry the number is not according to the given condition " + message
    );
});

