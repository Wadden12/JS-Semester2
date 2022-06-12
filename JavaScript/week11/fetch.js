// fetch("https://reqres.in/api/users");
document.querySelector("#btn1").addEventListener("click", getText);
document.querySelector("#btn2").addEventListener("click", getJSON);
document.querySelector("#btn3").addEventListener("click", getAData);

function getText() {
    fetch("data.txt").then(function (res) {
        return res.text();
    }).then(function (data) {
        document.querySelector("#output").innerHTML = data;

    }).catch(function (err) {
        console.log(err);
    });

}

function getJSON() {
    fetch("customers.json").then(function (res) {
        return res.json();
    }).then(function (data) {
        let output = "";
        data.forEach(function (item) {
            output += `<li>${item.name}</li>`;
        })
        document.querySelector("#output").innerHTML = output;

    }).catch(function (err) {
        console.log(err);
    });

}

function getAData() {
    fetch("https://reqres.in/api/users").then(function (res) {
        return res.json();
    }).then(function (value) {
        console.log(value);
        let output = "";
        value.data.forEach(function (item) {

            output += `<li>${item.email}</li>`;
        })
        document.querySelector("#output").innerHTML = output;

    }).catch(function (err) {
        console.log(err);
    });

}