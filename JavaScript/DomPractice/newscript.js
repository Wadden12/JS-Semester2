let form = document.querySelector('#book-form');
let list = document.querySelector('#book-list');
let container = document.querySelector('.container');


class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        var row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td> <a href = '#' class = "delete" >X</a></td>`;
        list.appendChild(row);


    }

    clearField() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }

    showAlert(message, className) {
        var div = document.createElement('div');
        div.innerText = message;
        div.className = className;
        div.id = 'box';
        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('#box').remove();
        }, 3000);

    }

    deleteBook(elemToDelete) {
        if (elemToDelete.className === "delete") {
            elemToDelete.parentElement.parentElement.remove();
        }

    }

}

class Store {

    static getBooks() {
        var books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books
    }

    static displayBooks() {
        var books = Store.getBooks();
        books.forEach(function (book) {
            var ui = new UI();
            ui.addBookToList(book);

        });

    }
    static addBook(book) {
        var books = Store.getBooks();

        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));

    }
    static removeBook(isbn) {
        var books = Store.getBooks();

        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);

            }

        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

form.addEventListener("submit", function (e) {
    var title = document.querySelector("#title").value;
    var author = document.querySelector("#author").value;
    var isbn = document.querySelector("#isbn").value;

    var book = new Book(title, author, isbn);
    var ui = new UI();

    if (title === "" || author === "" || isbn === "") {
        ui.showAlert("All fields are required", "error");
    } else {

        ui.addBookToList(book);
        Store.addBook(book);
        ui.showAlert("Book Successfully added", "success");
        ui.clearField();
    }
    e.preventDefault();
});

list.addEventListener("click", function (e) {
    var ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert("Book Successfully deleted", "success");
    Store.removeBook(e.target.parentElement.previousElementSibling.innerText);
});

document.addEventListener("DOMContentLoaded", Store.displayBooks);