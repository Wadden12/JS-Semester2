let p = new Promise(function (resolve, reject) {

    let x = 5 + 5;
    if (x === 5) {
        resolve("Successs!!!");
    } else {
        reject("Failed");
    }
});

p.then(function (message) {
    console.log("This is in the then of the promise" + message);
}).catch(function (message) {
    console.log("This is in the catch" + message);
});

let p = new Promise((resolve, reject) => {
    let a = Math.floor(Math.random() * 10 + 1);
    if (a > 5) {
        resolve("Number is great than 5");
    } else {
        reject("Number is less than 5");
    }

});

p.then((message) => {
    console.log("You have successfully generated a number great than 5" + message);

}).catch((message) => {
    console.log("Sorry the number is not acccording to giving conditions" + message);
});