
document.querySelector("#btn").addEventListener("click", loadData);
document.querySelector("#customer").addEventListener("click", loadCustomer);
document.querySelector("#customers").addEventListener("click", loadCustomers);
function loadData() {
    //Use XMLHttpReques here..
    let xhr = new XMLHttpRequest();
    //Open
    xhr.open("GET", "data.txt");
    console.log("Ready State", xhr.readyState);
    xhr.onprogress = function () {
        console.log("Ready State", xhr.readyState);
    };
    //   xhr.onload = function () {
    //     console.log("Ready State", xhr.readyState);
    //     if (this.status === 200 && this.readyState === 4) {
    //       document.querySelector(
    //         "#output"
    //       ).innerHTML = `<h1>${this.responseText} </h1>`;
    //     }
    xhr.onreadystatechange = function () {
        console.log("Ready State", xhr.readyState);
        if (this.status === 200 && this.readyState === 4) {
            document.querySelector(
                "#output"
            ).innerHTML = `<h1>${this.responseText} </h1>`;
        }
    };
    xhr.send();
}
function loadCustomer() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "customer.json");
    xhr.onload = function () {
        if (this.status === 200) {
            let customer = JSON.parse(this.responseText);
            let output = `<ul><li>ID: ${customer.id}</li><li> Name:${customer.name}</li> 
      <li>Company: ${customer.company}</li><li>Phone: ${customer.phone}</li></ul>`;
            document.querySelector("#cdata").innerHTML = output;
        }
    };
    xhr.send();
}
function loadCustomers() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "customers.json");
    xhr.onload = function () {
        if (this.status === 200) {
            let customers = JSON.parse(this.responseText);
            let output = "";
            customers.forEach(function (value) {
                output += `<ul><li>ID:<strong> ${value.id}</strong></li><li>Name:<strong> ${value.name}</strong></li><li>Company${value.company}</li><li>Phone:${value.phone}</li></ul>`;
            });
            document.querySelector("#cdata2").innerHTML = output;
        }
    };
    xhr.send();
}
//Http statuses...
// 200. OK
//403 forbiddne
//404 Not found..
// readyState values
//0: request not initilized
//1: server connection established...
//2.: request received
//3: Processing request..
//4: request finished and response is ready..