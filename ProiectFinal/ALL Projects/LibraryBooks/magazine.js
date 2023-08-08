import { Book } from "./book.js";

export class Magazine extends Book {
  constructor(title, author, isbn, issueNumber) {
    super(title, author, isbn);
    this.issueNumber = issueNumber;
  }
}
