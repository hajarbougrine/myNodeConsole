const User = require('./user')
class Librarian extends User {
    constructor(id, name) {
      super(id, name);
    }
  
    addBook(book, library) {
      library.addBook(book);
      console.log(`${book.title} has been added to the library by ${this.name}`);
    }
  
    checkBookStatus(book) {
      console.log(`${book.title} is currently ${book.isAvailable ? 'available' : 'not available'}`);
    }
  }
  
  module.exports = Librarian;