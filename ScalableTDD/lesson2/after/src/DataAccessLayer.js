
import b from "./fakeBrowser";

export default class DataAccessLayer {
    books;
    setBooks;
   
    async addNewBook( name, author ) {
        await b.post("someUrl", name, author);
    }

    async apiCall() {
       return await b.fetch("someUrl");
    }

    async loadData() {
        let response = await this.apiCall();
        let data = await response.json();

        this.setBooks(data.result);
    }

    constructor(booksArg, setBooksArg) {
        this.books = booksArg;
        this.setBooks = setBooksArg;
    }
}