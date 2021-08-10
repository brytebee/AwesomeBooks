class Library {
  constructor(books) {
    this.books = books;
    this.store = window.localStorage;
    this.list = document.getElementById('booklist');
    this.form = document.getElementById('form');
  }

  displayBooks() {
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }
    this.books = JSON.parse(localStorage.getItem('storeBook'));
    this.books.forEach((book) => {
      const li = document.createElement('li');
      li.innerHTML = `author: ${book.author}: title: ${book.title}`;
      const removeButton = document.createElement('button');
      removeButton.innerHTML = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(book.title);
        window.location.reload();
      });
      li.appendChild(removeButton);
      this.list.appendChild(li);
    });
  }

  addBook(title, author) {
    this.books.push({ title, author });
    this.store.setItem('storeBook', JSON.stringify(this.books));
    this.displayBooks();
  }

  removeBook(title) {
    this.books = this.books.filter((bok) => bok.title !== title);
    this.store.setItem('storeBook', JSON.stringify(this.books));
  }
}

const library = new Library(JSON.parse(localStorage.getItem('storeBook')));

window.addEventListener('load', () => {
  if (JSON.parse(localStorage.getItem('storeBook')) === null) {
    window.localStorage.setItem('storeBook', JSON.stringify([]));
    library.displayBooks();
  } else {
    library.displayBooks();
  }
});

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  library.addBook(title, author);
});