class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBook(book) {
    // console.log(book);
    let list = document.querySelector("#booklist");
    let row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><a href="#">x</a></td>`;
    list.appendChild(row);
  }

  deleteBook(target) {
    // console.log(e.target);
    if (target.hasAttribute("href")) {
      //   console.log(target);
      //   target.parentElement;
      //   console.log(target.parentElement.parentElement);
      target.parentElement.parentElement.remove();
    }
  }
}

//Define Selector
let form = document.querySelector("#book-form");
let booklist = document.querySelector("#booklist");
//Event Listners
form.addEventListener("submit", newBook);
booklist.addEventListener("click", removeBook);

function newBook(e) {
  //   console.log(`Add Book`);
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let isbn = document.querySelector("#isbn").value;

  let book = new Book(title, author, isbn);
  let ui = new UI();

  if (title == "" || author == "" || isbn == "") {
    // showMessage("error", "All fields are required..");
    console.log(`Errror...`);
  } else {
    // console.log(book);
    //showMessage("success", "Successfuly added book");
    ui.addBook(book);
  }
  e.preventDefault();
}

function removeBook(e) {
  let ui = new UI();
  ui.deleteBook(e.target);
  e.preventDefault();
}
