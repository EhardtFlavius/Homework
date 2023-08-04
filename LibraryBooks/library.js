export class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(isbn) {
    this.books = this.books.filter((book) => book.isbn !== isbn);
  }

  findBookByAuthor(author) {
    this.books = this.books.filter((book) => book.author === author);
  }

  listBooks() {
    this.books.forEach((book) => {
      console.log(book);
    });
  }

  getTotalBooks() {
    return this.books.length;
  }

  getBooksWithTitleContaining(title) {
    this.books = this.books.filter((book) => book.title.includes(title));
  }

  getUniqueAuthors() {
    const uniqueAuthors = Array.from(
      new Set(this.books.map((book) => book.author))
    );
    return uniqueAuthors;
  }

  hasAnyBooksByAuthor(author) {
    return this.books.some((book) => book.author === author);
  }

  haveAllBooksByAuthor(author) {
    return this.books.every((book) => book.author === author);
  }

  getBookTitles() {
    return this.books.map((book) => book.title);
  }
}
