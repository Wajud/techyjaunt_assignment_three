// Book class

class Book {
  #isbn;
  constructor(title, author, isbn, available = true) {
    this.title = title;
    this.author = author;
    this.#isbn = isbn;
    this.available = available;
  }

  get getIsbn() {
    return this.#isbn;
  }

  set setIsbn(newIsbn) {
    this.#isbn = newIsbn;
  }

  borrowBook() {
    if (this.available) {
      this.available = false;
    } else {
      return `The book is not available`;
    }
  }

  returnBook() {
    this.available = true;
  }
}

//Book Instances : books

const book1 = new Book("Engineering Mathematics", "John Bird", "ta01t", true);
const book2 = new Book("Organic Chemistry", "Familoni", "ta02b", false);
const book3 = new Book("Essential Chemistry", "Odesina", "ta12c");

// console.log(book1.borrowBook());
// console.log(book1);
// console.log(book2);

// book1.returnBook();
// console.log(book1);
// book1.setIsbn = "tk97q";
// console.log(book1.getIsbn);

// console.log(book1);

class Library {
  constructor(books) {
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(isbn) {
    const filteredBooks = this.books.filter((book) => book.getIsbn !== isbn);
    this.books = filteredBooks;
  }

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }
}

//Instance of Library
const MainLibrary = new Library([book1, book2, book3]);
// MainLibrary.addBook(
//   new Book("Senior School Physics", "P.N Okeke", "ta87y", false)
// );

// MainLibrary.removeBook("ta01t");

// console.log(MainLibrary);

// DigitalLibrary Class
class DigitalLibrary extends Library {
  constructor(books) {
    super(books);
  }
  downloadBook(isbn) {
    const bookRequested = this.books.find((book) => book.getIsbn === isbn);
    if (!bookRequested) {
      return `Sorry. The book you have requested is not available.`;
    } else {
      return `Book downloaded. Hurray!`;
    }
  }
}

const metaLibrary = new DigitalLibrary([book1, book2, book3]);
// console.log(metaLibrary.downloadBook("ta02b"));
// console.log(metaLibrary);
