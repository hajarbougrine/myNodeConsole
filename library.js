const Member = require('./member')
class Library {
    constructor() {
      this._books = [];
      this._users = [];
    }
  
    addBook(book) {
      this._books.push(book);
    }
  
    registerUser(user) {
      this._users.push(user);
    }
  
    borrowBook(bookTitle, memberId) {
      const book = this._books.find(book => book.title === bookTitle);
      const member = this._users.find(user => user.id === memberId && user instanceof Member);
  
      if (book && member) {
        if (book.isAvailable) {
          member.borrowBook(book);
        } else {
          console.log(`Sorry, ${bookTitle} is currently not available.`);
        }
      } else {
        console.log(`Book or member not found.`);
      }
    }
  
    returnBook(bookTitle, memberId) {
      const book = this._books.find(book => book.title === bookTitle);
      const member = this._users.find(user => user.id === memberId && user instanceof Member);
  
      if (book && member) {
        member.returnBook(book);
      } else {
        console.log(`Book or member not found.`);
      }
    }
  
    listAvailableBooks() {
      const availableBooks = this._books.filter(book => book.isAvailable);
      console.log("Available Books:");
      availableBooks.forEach(book => console.log(book.title));
    }
  
    findUserById(userId) {
      return this._users.find(user => user.id === userId);
    }
  }

  module.exports = Library;
  