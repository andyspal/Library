

let myLibrary = [];
let books_container = document.querySelector(".books_container");
let submit_button = document.querySelector(".submit");
let form = document.querySelector("form")
function Book(name,author,pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;

  this.info = function(){
    return `Title: ${name}\nAuthor: ${author}\nPages: ${pages}`;
  }
}

function toggleForm(){
    let form_container = document.querySelector(".form_container");
    form_container.classList.toggle("show"); 
}
submit_button.addEventListener('click', function(event){
  event.preventDefault();
  if (form.checkValidity()) {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;

  let book = new Book(title,author,pages);
  
  myLibrary.push(book);

  displayBook(title,author,pages);
  toggleForm();
  
  }
  else {
    
  }
})


function displayBook(title,author,pages){
  const contenedor = document.createElement("div");
  const deleteButton = document.createElement("button");
  const title_h2 = document.createElement("h2");
  const author_p = document.createElement("p");
  const pages_p = document.createElement("p");

  books_container.appendChild(contenedor);

  contenedor.appendChild(title_h2).textContent = title;
  contenedor.appendChild(author_p).textContent =  `Author: ${author}`;
  contenedor.appendChild(pages_p).textContent = `Pages: ${pages}`;
  contenedor.appendChild(deleteButton);
  deleteButton.textContent = "Eliminar";
  deleteButton.onclick = function() {
    books_container.removeChild(contenedor);
  };

  
}
for(let i = 0; i <= myLibrary.length; i++){
  let libro = myLibrary[i];
  const contenedor = document.createElement("div");
  const title = document.createElement("h2");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  title.textContent = libro.name;
  author.textContent = libro.author;
  pages.textContent = libro.pages;
  books_container.appendChild(contenedor);
  contenedor.appendChild(title)
  contenedor.appendChild(author);
  contenedor.appendChild(pages)
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  contenedor.appendChild(deleteButton);

  deleteButton.onclick = function() {
    books_container.removeChild(contenedor);
  };
}


