let library = [];

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

let divinaComedia = new Book("La Divina Comedia", "Dante Alligheri", "500", true);

function displayBooks(book) {
    const library = document.querySelector(".library");
    const title = book.title;
    const author = book.author;
    const pages = book.pages;
    const status = book.status;
    const bookCard = document.createElement("div");
    const cardContent = document.createTextNode(`${title} by ${author}, ${pages} pages, ${status}`)
    bookCard.appendChild(cardContent);
    library.appendChild(bookCard);
};

displayBooks(divinaComedia);