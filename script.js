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
    if (this.books.length < 1) {
      this.list.style.display = 'none';
    } else {
      this.list.style.display = 'flex';
    }

    this.books.forEach((book) => {
      const li = document.createElement('li');
      li.style.display = 'flex';
      li.innerHTML = `author: ${book.author}: title: ${book.title}`;
      const removeButton = document.createElement('button');
      removeButton.innerHTML = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(book.title);
        this.displayBooks();
      });
      li.appendChild(removeButton);
      this.list.appendChild(li);
    });
  }

  addBook(title, author) {
    this.books.push({ title, author });
    this.store.setItem('storeBook', JSON.stringify(this.books));
    this.displayBooks();
    this.form.reset();
  }

  removeBook() {
    this.books = this.books.filter((bok) => this.books.indexOf(bok));
    this.store.setItem('storeBook', JSON.stringify(this.books));
  }
}

const library = new Library(JSON.parse(localStorage.getItem('storeBook')));
const listsection = document.getElementById('list-section');
const formsection = document.getElementById('add-new-section');
const contactsection = document.getElementById('contact');

window.addEventListener('load', () => {
  if (JSON.parse(localStorage.getItem('storeBook')) === null) {
    window.localStorage.setItem('storeBook', JSON.stringify([]));
    library.displayBooks();
  } else {
    library.displayBooks();
  }
  const currentDate = document.getElementById('date');
  /* eslint-disable */
  currentDate.innerHTML = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_FULL);
  /* eslint-enable */
  listsection.style.display = 'flex';
});

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  library.addBook(title, author);
  listsection.style.display = 'flex';
  formsection.style.display = 'none';
  contactsection.style.display = 'none';
});

document.getElementById('list-button').addEventListener('click', () => {
  if (listsection.style.display !== 'flex') {
    listsection.style.display = 'flex';
    formsection.style.display = 'none';
    contactsection.style.display = 'none';
  } else {
    listsection.style.display = 'none';
  }
});

document.getElementById('addNew').addEventListener('click', () => {
  if (formsection.style.display !== 'flex') {
    listsection.style.display = 'none';
    formsection.style.display = 'flex';
    contactsection.style.display = 'none';
  } else {
    formsection.style.display = 'none';
  }
});

document.getElementById('contact-button').addEventListener('click', () => {
  if (contactsection.style.display !== 'flex') {
    listsection.style.display = 'none';
    formsection.style.display = 'none';
    contactsection.style.display = 'flex';
  } else {
    contactsection.style.display = 'none';
  }
});