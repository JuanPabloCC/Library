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

Book.prototype.changeStatus = function() {
    this.read ? this.read = false : this.read = true;
    this.status === "read"? this.status = "not read yet" : this.status = "read";
};

function addToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read)
    library.push(book);
};

function deleteBookCard(e) {
    const bookCardToDelete = e.target.parentNode.parentNode;
    const bookCardId = bookCardToDelete.getAttribute('data-id');
    const bookIndex = library.findIndex(item => item.id === bookCardId);
    library.splice(bookIndex, 1);
    bookCardToDelete.remove();
}

function changeDisplayStatus(cardBodyText, book) {
    book.changeStatus();
    cardBodyText.textContent = `By ${book.author}, ${book.pages} pages, ${book.status}.`;
};

function createBookCard(book){
    const bookCard = document.createElement("div");
    bookCard.setAttribute('data-id', book.id);
    bookCard.classList.add("bookCard");
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = `${book.title}`
    const cardBodyText = document.createElement("p");
    cardBodyText.textContent = `By ${book.author}, ${book.pages} pages, ${book.status}.`
    bookCard.appendChild(cardTitle);
    bookCard.appendChild(cardBodyText);
    const buttonContainer = document.createElement("div");
    const deleteButton = document.createElement("button");
    const statusButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteBookCard);
    statusButton.textContent = "Change Status";
    statusButton.addEventListener("click", () => {changeDisplayStatus(cardBodyText, book)});
    buttonContainer.appendChild(statusButton);
    buttonContainer.appendChild(deleteButton);
    bookCard.appendChild(buttonContainer);
    return bookCard
};

function displayBooks() {
    const libraryDiv = document.querySelector(".library");
    const book = library.at(-1);
    const bookCard = createBookCard(book);
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
    const readInput = document.querySelector('input[name="status"]:checked');

    const titleInputVal = titleInput.validity.valueMissing;
    const authorInputVal = authorInput.validity.valueMissing;
    const pagesInputVal = pagesInput.validity.valueMissing;
    const readInputVal = readInput.validity.valueMissing;

    if (!titleInputVal && !authorInputVal && !pagesInputVal && !readInputVal){
        e.preventDefault();
        addToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value === "1"? true : false);
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
