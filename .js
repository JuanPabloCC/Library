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

let divinaComedia = new Book("La Divina Comedia", "Dante Alligheri", "500", false);
let condeMontecristo = new Book("El Conde De Montecristo", "Alejandro Dumas", "1500", true);
let viajeCentro = new Book("El Viaje Al Centro De La Tierra", "Julio Verne", "300", true);

let library = new Array();
library.push(divinaComedia, condeMontecristo, viajeCentro);

function displayBooks(book) {
    const libraryDiv = document.querySelector(".library");

    library.forEach(function(item){
        const title = item.title;
        const author = item.author;
        const pages = item.pages;
        const status = item.status;
        const bookCard = document.createElement("div");
        const cardContent = document.createTextNode(`${title} by ${author}, ${pages} pages, ${status}`)
        bookCard.appendChild(cardContent);
        libraryDiv.appendChild(bookCard);
    });

};

displayBooks(divinaComedia);