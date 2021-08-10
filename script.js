const books = [];
let store = window.localStorage;
console.log(store);
list = document.getElementById('booklist');

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addNewBook() {
    title = document.getElementById('title');
    author = document.getElementById('author');
    book = new Book(title.value, author.value);
    books.push(book);
    store.setItem('storeBook', JSON.stringify(books));
    console.log(store.getItem('author'));
    displayBooks();  
}

function removeBook(title) {
  books.filter(book => book.title === title);
  // location.reload();
}

function displayBooks() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  console.log(typeof(store.getItem('storeBook')));

  JSON.parse(localStorage.getItem("storeBook")).map(book => {
    let li = document.createElement("li");
    li.innerHTML = book.title + " " + book.author;
    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.onclick = removeBook(book.title);
    li.appendChild(removeButton);
    list.appendChild(li);
  })
}

function storebooks(books) {
  // Get the existing data
	var existing = localStorage.getItem('storeBook');
  console.log(existing);
	// If no existing data, create an array
	// Otherwise, convert the localStorage string to an array
	existing = existing ? existing.split(',') : [];

	// Add new data to localStorage Array
	existing = books;

	// Save back to localStorage
	localStorage.setItem('storeBook', existing.toString());
}




