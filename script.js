const books = [];
list = document.getElementById('booklist');
console.log("Hello")

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addNewBook() {
    title = document.getElementById('title');
    author = document.getElementById('author');
    book = new Book(title.value, author.value);
    books.push(book);
    displayBooks();
    
}

function removeBook(title) {
  books.filter(book => book.title === title);
}

function displayBooks() {
  books.map(book => {
    let li = document.createElement("li");
    li.innerHTML = book.title + " " + book.author;
    list.appendChild(li);
  })
}


