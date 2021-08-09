const books = [];

function addNewBook(title, author) {
  books.push({ title, author });
}

function removeBook(title) {
  books.filter(book => book.title === title);
}