const Person = require('./person')
class Author extends Person {
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
      this._publishedBooks = [];
    }
  
    get publishedBooks() {
      return this._publishedBooks;
    }
  
    addBook(book) {
      this._publishedBooks.push(book);
    }
  }
  
  module.exports = Author;