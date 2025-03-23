import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookListComponent from "./BookListComponent";

/**
 * In these 'outside in tests' the UI needs to be rendered out and elements and their data found and verified.
 * This requires complex and verbose test code and is subject to small changes in the UI that are not related to the
 * core logic of the application - in other words the tests in this case are focused on the framework and code
 * written by someone else instead of the new code you're creating to build the app. 
 */

const mockLoadData = jest.fn();

export const mockBooks = [
  { bookId: 1, name: "Introduction to Algorithms" },
  { bookId: 2, name: "Clean Code" },
  { bookId: 3, name: "Clean Architecture" }
];

beforeEach(() => {
  jest.clearAllMocks();
});

it("should load data", () => {
  // Use a third party library to render and interact with the UI elements
  // of the component you want to test
  render(<BookListComponent loadData={mockLoadData} />);

  expect(mockLoadData).toHaveBeenCalled();
});

it("should display no books if no books available", () => {
  render(<BookListComponent loadData={mockLoadData} />);

  // Detailed and CSS (implementation) dependent technique to determine 
  // the data state of the app 
  expect(screen.getByTestId("book-list")).toBeEmptyDOMElement();
});

it("should display books if books available", () => {

  render(<BookListComponent books={mockBooks} loadData={mockLoadData} />);
  const parentContainer = screen.getByTestId("book-list");
  const childElements = screen.queryAllByRole("listitem", {
    container: parentContainer
  });

  // Very DOM specific approach to understanding and checking the data
  // that is flowing out to the UI
  expect(childElements[0]).toHaveTextContent("Introduction to Algorithms");
  expect(childElements[1]).toHaveTextContent("Clean Code");
  expect(childElements[2]).toHaveTextContent("Clean Architecture");
});
