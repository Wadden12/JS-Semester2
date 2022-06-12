document.querySelector(".get-jokes").addEventListener("click", getAData);


function getAData(e) {
    let number = document.querySelector("#number").value;
    fetch(`http://api.icndb.com/jokes/random/${number}`).then(function (res) {

        return res.json();

    }).then(function (data) {
        console.log(data);
        let output = "";
        data.value.forEach(function (item) {
            output += `<li>${item.joke}</li>`;
        })
        document.querySelector(".jokes").innerHTML = output;

    }).catch(function (err) {
        console.log(err);
    });
    e.preventDefault();

}


// function getJokes(e) {
//     let number = document.querySelector("#number").value;

//     let xhr = new XMLHttpRequest();

//     xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`);

//     xhr.onload = function () {
//         if (this.status === 200) {
//             let response = JSON.parse(this.responseText);
//             let output = "";
//             if (response.type === "success") {
//                 response.value.forEach(function (item) {
//                     output += `<li>${item.joke}</li>`;
//                 });
//             } else {
//                 output += `<li>Something went wrong</li>`;
//             }

//             document.querySelector(".jokes").innerHTML = output;
//         }
//     };

//     xhr.send();

//     e.preventDefault();
// }