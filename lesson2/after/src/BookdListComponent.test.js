import "@testing-library/jest-dom";
import DataAccessLayer from "./DataAccessLayer";

// Clear mock state so each test is run independently of the others.
beforeEach(() => {
  jest.clearAllMocks();
});

// This variable represents the data that the React component will bind to
let books = [];

let setBooksArg = (booksArg) => {
  books = booksArg;
  // This is equivalent to the re-render of the App component when setBooks is called.  
  //dal = new DataAccessLayer(books, setBooks);
}

let addBookArg = (bookArg) => {
  books.push(bookArg);
  // This is equivalent to the re-render of the App component when setBooks is called.  
  //dal = new DataAccessLayer(books, setBooks);
}

let dal = new DataAccessLayer(books, setBooksArg, addBookArg);

// Remove duplication from the different tests using a shared setup function
let setup = async (stubData) => {

  // In this function setup the response from a call
  // to an HTTP endpoint  being mocked out so we can return 
  // stubData when apiCall is called in a test. 

  dal.apiCall = jest.fn(() => {
    return Promise.resolve({
      json: () =>
        Promise.resolve(
          JSON.parse(
            JSON.stringify({
              success: true,
              result: stubData,
            })
          )
        ),
    });
  });

  await dal.loadData();

  return dal;
};

it("Should call the 'apiCall' method when loadData() is called", async () => {

  // setup calls loadData()
  const dal = await setup([]);
  expect(dal.apiCall).toHaveBeenCalled();

});

/*
it("Should have no books if no books are returned by loadData()", async () => {
  
  const dal = await setup([]);

  console.log(dal.books)
  expect(dal.books?.length).toBe(0);

});

it("Should have books if more than zero books returned by loadData()", async () => {

  await setup([
    { bookId: 1, name: "Introduction to Algorithms" },
    { bookId: 2, name: "Clean Code" },
    { bookId: 3, name: "Clean Architecture" }
  ]);

  expect(books?.length).toBe(3);
  expect(books[0].name).toBe("Introduction to Algorithms");
  expect(books[1].name).toBe("Clean Code");
  expect(books[2].name).toBe("Clean Architecture");

});

*/