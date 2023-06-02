let myLibrary = [];
let form = document.querySelector("form")
let booksContainer = document.querySelector('.books_container');

function Book(title, author, pages){
  this.title = title;
  this.author = author;
  this.pages = pages;

}
form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (form.checkValidity()) {
    addToLibrary();
    displayLibrary();
    form.reset();
  }
  else{
    let alert = document.createElement('p');
    alert.textContent = '* Please fill the form';
    form.appendChild(alert);
  }
});



function addToLibrary(){
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let book = new Book(title,author,pages);
  myLibrary.push(book);
  console.log(myLibrary);
}


function displayLibrary(){
  booksContainer.innerHTML = '';
  for(let i = 0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    let card = document.createElement('div');
    let title_h2 = document.createElement('h2');
    let author_p = document.createElement('p');
    let pages_p = document.createElement('p');
    let del_btn = document.createElement('button');

    title_h2.textContent = book.title;
    author_p.textContent = `Author: ${book.author}`;
    pages_p.textContent = `Pages: ${book.pages}`;
    del_btn.textContent = "Delete"
    del_btn.addEventListener('click', function() {
      deleteBook(i);
      displayLibrary(); 
      console.log(myLibrary)
    });
    
    let elements = [title_h2,author_p,pages_p,del_btn];

    booksContainer.appendChild(card);
    elements.forEach(element => {card.appendChild(element)});
  }
}



function toggleForm(){
    let form_container = document.querySelector(".form_container");
    form_container.classList.toggle("show"); 
}

function deleteBook(index){
  myLibrary.splice(index,1);
}