let books = [];
const store = window.localStorage;
const list = document.getElementById('booklist');
const button = document.getElementById('newBook');

function displayBooks() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  books = JSON.parse(localStorage.getItem('storeBook'));
  books.forEach((book) => {
    const li = document.createElement("li");
    li.innerHTML = book.title + ' ' + book.author;
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.addEventListener('click', () => {
      books = books.filter((bok) => bok.title !== book.title);
      store.setItem('storeBook', JSON.stringify(books));
      window.location.reload();
    });
    li.appendChild(removeButton);
    list.appendChild(li);
  });
}

button.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  books.push({ title, author });
  store.setItem('storeBook', JSON.stringify(books));
  displayBooks();
});

window.addEventListener('load', () => {
  displayBooks();
});