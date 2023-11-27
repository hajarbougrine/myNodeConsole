const Book = require('./book')
const Author = require('./author')
const Library = require('./library')
const Librarian = require('./librarian')
const Member = require('./member')
const Person = require('./person')
// Create instances of Book
let book1 = new Book("JavaScript: The Good Parts", "Douglas Crockford", "978-0596517748");
let book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke", "978-1593279509");
let book3 = new Book("You Don't Know JS", "Kyle Simpson", "978-1491904244");

// Create an Author
let author1 = new Author("Douglas Crockford", "1944-01-01");
author1.addBook(book1);

// Create Members
let member1 = new Member(1, "Alice Johnson");
let member2 = new Member(2, "Bob Smith");

// Create a Librarian
let librarian = new Librarian(100, "Emma Clark");

// Create a Library instance
let library = new Library();

// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Register users
library.registerUser(member1);
library.registerUser(member2);
library.registerUser(librarian);

// Simulate book borrowing
library.borrowBook("JavaScript: The Good Parts", 1); // Alice borrows "JavaScript: The Good Parts"
library.borrowBook("Eloquent JavaScript", 2);       // Bob borrows "Eloquent JavaScript"

// List available books after borrowing
library.listAvailableBooks();

// Simulate book returning
library.returnBook("JavaScript: The Good Parts", 1); // Alice returns "JavaScript: The Good Parts"

// List available books after returning
library.listAvailableBooks();
