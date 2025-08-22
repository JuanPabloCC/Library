function Books(title, author, pages, read) {
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor!")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.status = this.read ? "read" : "not read yet";
    this.id = crypto.randomUUID();
    this.info = function info() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`);
    }
};

library = [];

function createBooks(title, author, pages, read){
    let book = new Books(title, author, pages, read)
    library.push(book);
};