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