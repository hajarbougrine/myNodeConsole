class Book {
    constructor(title, author, isbn, isAvailable = true) {
      this._title = title;
      this._author = author;
      this._isbn = isbn;
      this._isAvailable = isAvailable;
    }
  
    // Getter for title
    get title() {
      return this._title;
    }
  
    // Setter for title
    set title(newTitle) {
      this._title = newTitle;
    }
  
    // Getter for author
    get author() {
      return this._author;
    }
  
    // Setter for author
    set author(newAuthor) {
      this._author = newAuthor;
    }
  
    // Getter for ISBN
    get isbn() {
      return this._isbn;
    }
  
    // Setter for ISBN
    set isbn(newIsbn) {
      this._isbn = newIsbn;
    }
  
    // Getter for availability
    get isAvailable() {
      return this._isAvailable;
    }
  
    // Setter for availability
    set isAvailable(newAvailability) {
      this._isAvailable = newAvailability;
    }
  }
  
  module.exports = Book;