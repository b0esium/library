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

let dune = new Book("Dune", "Herbert", 400, true);
dune.info();
