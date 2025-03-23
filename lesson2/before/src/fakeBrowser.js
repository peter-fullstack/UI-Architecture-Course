class FakeBrowser {
  books = [];

  constructor() {
    this.books = [
      {
        name: "Wind in the willows",
        author: "Kenneth Graeme",
        bookId: 0
      },
      {
        name: "I, Robot",
        author: "Isaac Asimov",
        bookId: 1
      },
      {
        name: "The Hobbit",
        author: "Jrr Tolkein",
        bookId: 2
      }
    ];
  }

  fetch = async (urlArg) => {
    return Promise.resolve({
      json: () =>
        Promise.resolve(
          JSON.parse(
            JSON.stringify({
              success: true,
              result: this.books
            })
          )
        )
    });
  };
}

const b = new FakeBrowser();
export default b;
