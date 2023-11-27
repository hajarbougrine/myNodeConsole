const User = require('./user')
class Member extends User {
    constructor(id, name) {
      super(id, name);
      this._borrowedBooks = [];
    }
  
    borrowBook(book) {
      if (book.isAvailable) {
        this._borrowedBooks.push(book);
        book.isAvailable = false;
        console.log(`${this.name} has borrowed ${book.title}`);
      } else {
        console.log(`${book.title} is not available for borrowing`);
      }
    }
  
    returnBook(book) {
      const bookIndex = this._borrowedBooks.indexOf(book);
      if (bookIndex !== -1) {
        this._borrowedBooks.splice(bookIndex, 1);
        book.isAvailable = true;
        console.log(`${this.name} has returned ${book.title}`);
      }
    }
  
    get borrowedBooks() {
      return this._borrowedBooks;
    }
  }
  
  module.exports = Member;