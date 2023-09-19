import { Book } from "./book.js";
import { Magazine } from "./magazine.js";
import { Library } from "./library.js";

const book1 = new Book("carte1", "Flavius", "123");
const book2 = new Book("carte2", "Dumitru", "124");
const book3 = new Book("carte3", "Razvan", "125");
const magazine1 = new Magazine("magazine1", "Iulian", "1265", 2);

const library = new Library("Librarie");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.getBooksWithTitleContaining("carte");
library.listBooks();

console.log(library.books);
console.log(library.getTotalBooks());
console.log(library.hasAnyBooksByAuthor("Flavius")); // true
console.log(library.haveAllBooksByAuthor("Flavius")); // false
console.log(library.getBookTitles()); // ["Carte 1", "Carte 2", "Carte 3", "Magazine 1"]

const uniqueAuthors = library.getUniqueAuthors();
console.log(uniqueAuthors);
