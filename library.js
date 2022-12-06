class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages, ${
        this.read ? "read" : "not read yet"
      }`
    );
  }
}

let myLibrary = [];

function addToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

// get table body DOM
let library = document.getElementById("library");

function displayBooks() {
  for (book of myLibrary) {
    // create new row
    let newBook = document.createElement("tr");
    library.append(newBook);

    let newTitle = document.createElement("th");
    newTitle.innerText = book.title;
    newBook.append(newTitle);

    let newAuthor = document.createElement("th");
    newAuthor.innerText = book.author;
    newBook.append(newAuthor);

    let newPages = document.createElement("th");
    newPages.innerText = book.pages;
    newBook.append(newPages);

    let newRead = document.createElement("th");
    newRead.innerText = book.read;
    newBook.append(newRead);
  }
}

// fill with test books
addToLibrary("Dune", "Herbert", 600, true);
addToLibrary("Hyperion", "Simmons", 400, true);

displayBooks();
