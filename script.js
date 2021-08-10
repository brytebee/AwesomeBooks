var books = [];
let store = window.localStorage;
list = document.getElementById('booklist');

function addNewBook() {
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    books.push({ title , author });
    store.setItem('storeBook', JSON.stringify(books));
    displayBooks();  
}

function displayBooks() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
   books = JSON.parse(localStorage.getItem("storeBook"))
   books.map(book => {
    let li = document.createElement("li");
    li.innerHTML = book.title + " " + book.author + " ";
    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.addEventListener('click', (b) => {
        books = books.filter(bok => bok.title !== book.title);
        store.setItem('storeBook', JSON.stringify(books));
        window.location.reload();
    })  
    li.appendChild(removeButton);
    list.appendChild(li);
  })
}

window.addEventListener('load',(e) =>{
    displayBooks();
})



