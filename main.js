let myLibrary = [];
let form = document.querySelector("form")
let booksContainer = document.querySelector('.books_container');

class Book{
  constructor(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
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
    card.classList.add('card');
    let title_h2 = document.createElement('h2');
    let author_p = document.createElement('p');
    let pages_p = document.createElement('p');
    let del_btn = document.createElement('button');

    let read_cbox = document.createElement('input');
    read_cbox.type = 'checkbox';
    read_cbox.id = 'is_read';
    read_cbox.name = 'is_read';

    let read_label = document.createElement('label');
    read_label.htmlFor = 'is_Read';
    read_label.textContent = 'Read';
    let checkbox_div = document.createElement('div')
    checkbox_div.classList.add('checkbox_div')

    title_h2.textContent = book.title;
    author_p.textContent = `Author: ${book.author}`;
    pages_p.textContent = `Pages: ${book.pages}`;
    del_btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 83 95" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="transparent"/>
    <g id="&#240;&#159;&#166;&#134; icon &#34;trash&#34;">
    <path id="Vector" d="M35.5629 0C29.043 0 23.7086 5.33443 23.7086 11.8543H11.8543C5.33443 11.8543 0 17.1887 0 23.7086H82.98C82.98 17.1887 77.6456 11.8543 71.1257 11.8543H59.2714C59.2714 5.33443 53.937 0 47.4171 0H35.5629ZM11.8543 35.5629V92.582C11.8543 93.8859 12.8026 94.8343 14.1066 94.8343H68.9919C70.2959 94.8343 71.2443 93.8859 71.2443 92.582V35.5629H59.39V77.0529C59.39 80.3721 56.782 82.98 53.4628 82.98C50.1436 82.98 47.5357 80.3721 47.5357 77.0529V35.5629H35.6814V77.0529C35.6814 80.3721 33.0735 82.98 29.7543 82.98C26.4351 82.98 23.8271 80.3721 23.8271 77.0529V35.5629H11.9728H11.8543Z" fill="black"/>
    </g>
    </svg>`;
    del_btn.addEventListener('click', function() {
      deleteBook(i);
      displayLibrary(); 
      console.log(myLibrary)
    });
    
    let elements = [title_h2,author_p,pages_p, checkbox_div, del_btn];

    booksContainer.appendChild(card);
    elements.forEach(element => {card.appendChild(element)});
    checkbox_div.appendChild(read_label);
    checkbox_div.appendChild(read_cbox);

    
  }
}



function toggleForm(){
    let form_container = document.querySelector(".form_container");
    form_container.classList.toggle("show"); 
}

function deleteBook(index){
  myLibrary.splice(index,1);
}