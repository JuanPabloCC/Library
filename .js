function Book(title, author, pages, read) {
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor!")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.status = this.read ? "read" : "not read yet";
    this.id = crypto.randomUUID();
};

function addToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read)
    library.push(book);
};

function displayBooks() {
    const libraryDiv = document.querySelector(".library");
    const book = library.at(-1);
    const bookCard = document.createElement("div");
    bookCard.setAttribute('data-id', book.id);
    const cardContent = document.createTextNode(`${book.title} by ${book.author}, ${book.pages} pages, ${book.status}`);
    bookCard.appendChild(cardContent);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    bookCard.appendChild(deleteButton);
    libraryDiv.appendChild(bookCard);
};

let library = new Array();
const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector(".addBook");
const confirmButton = document.querySelector("#confirm-button");
const closeButton = document.querySelector("#close-button");
const bookForm = document.querySelector("#book-form");

addBookButton.addEventListener("click", () => {
    dialog.showModal();
});

confirmButton.addEventListener("click", (e) => {

    const titleInput = bookForm.elements[0];
    const authorInput = bookForm.elements[1];
    const pagesInput = bookForm.elements[2];
    const readInput = bookForm.elements[3];

    const titleInputVal = titleInput.validity.valueMissing;
    const authorInputVal = authorInput.validity.valueMissing;
    const pagesInputVal = pagesInput.validity.valueMissing;
    const readInputVal = readInput.validity.valueMissing;

    if (!titleInputVal && !authorInputVal && !pagesInputVal && !readInputVal){
        e.preventDefault();
        addToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
        displayBooks();
        bookForm.reset();
    } else {
        console.log("algo no está bien")
    }
});

closeButton.addEventListener("click", (e)=>{
    e.preventDefault();
    dialog.close();
});
