let form = document.querySelector('#book-form');
let list = document.querySelector('#book-list');
let container = document.querySelector('.container');

form.addEventListener('submit', function (e) {

    var title = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var isbn = document.querySelector("#isbn").value;
    addBookToList(title, author, isbn);
    clearFields();
    e.preventDefault();
});


function addBookToList(title, author, isbn) {
    if (title === "" || author === "" || isbn === '') {
        showAlert("no field should be empty", "error");
    } else {
        var row = document.createElement("tr");
        row.innerHTML = `<td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td> <a href = '#' class = "delete" >X</a></td>`;
        list.appendChild(row);
        showAlert("Book Added successfully", "success");
    }

}

function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
}

function showAlert(message, className) {
    var div = document.createElement('div');
    div.innerText = message;
    div.className = className;
    div.id = 'box';
    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector('#box').remove();
    }, 3000);
}

document.querySelector('#book-list').addEventListener('click', function (e) {


    deleteBook(e.target);
    e.preventDefault();
});

function deleteBook(elemToDelete) {
    if (elemToDelete.className === "delete") {
        elemToDelete.parentElement.parentElement.remove();
        showAlert("The book was deleted", "success");
    }
}