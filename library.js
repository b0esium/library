class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  toggleRead() {
    this.read = !this.read;
  }
}

let myLibrary = [];

// create a new Book object and add it to the library
function addToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

// get table body DOM
let library = document.getElementById("library");

function displayBooks() {
  // empty previous display
  emptyLibrary();
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

    // remove book button
    let deleteBookCell = document.createElement("th");
    let deleteBookBtn = document.createElement("button");
    deleteBookBtn.setAttribute("data-index", `${myLibrary.indexOf(book)}`);
    deleteBookBtn.setAttribute("class", "btn btn-warning");
    deleteBookBtn.innerText = "Remove";
    deleteBookBtn.addEventListener("click", function () {
      removeBook(deleteBookBtn.dataset.index);
      displayBooks();
    });
    newBook.append(deleteBookCell);
    deleteBookCell.appendChild(deleteBookBtn);

    // toggle read state button
    let toggleReadCell = document.createElement("th");
    let toggleReadBtn = document.createElement("button");
    toggleReadBtn.setAttribute("data-index", `${myLibrary.indexOf(book)}`);
    toggleReadBtn.setAttribute("class", "btn btn-secondary");
    toggleReadBtn.innerText = "Toggle Read";
    toggleReadBtn.addEventListener("click", function () {
      myLibrary[toggleReadBtn.dataset.index].toggleRead();
      displayBooks();
    });
    newBook.append(toggleReadCell);
    toggleReadCell.appendChild(toggleReadBtn);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
}

// remove all DOM elements from display
function emptyLibrary() {
  while (library.firstChild) {
    library.removeChild(library.firstChild);
  }
}

// fill with test books
addToLibrary("Dune", "Herbert", 600, true);
addToLibrary("Hyperion", "Simmons", 400, true);

// initial display
displayBooks();

let addBookBtn = document.getElementById("addBookBtn");
let addBookForm = document.getElementById("addBookForm");
addBookBtn.addEventListener("click", function () {
  showForm();
});

function showForm() {
  addBookForm.setAttribute("style", "display: block");
}

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let newBookTitle = addBookForm.elements["title"].value;
  let newBookAuthor = addBookForm.elements["author"].value;
  let newBookPages = addBookForm.elements["pages"].value;
  let newBookRead = addBookForm.elements["read"].checked;
  addToLibrary(newBookTitle, newBookAuthor, newBookPages, newBookRead);
  displayBooks();
});
