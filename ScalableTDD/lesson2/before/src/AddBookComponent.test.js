import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import AddBookComponentBefore from "./AddBookComponentBefore";

/**
 * For the 'outside in' testing of the AddBookComponent - the tests are focused on the input controls and the
 * different data values and types of user interactions.
 * This includes checking that the data entered in the form is passed to the addBooks function that we pass in as a mock.
 */

const mockAddBookFunction = jest.fn();
const mockLoadBooksFunction = jest.fn();

export const mockBooks = [
  { bookId: 1, name: "Introduction to Algorithms" },
  { bookId: 2, name: "Clean Code" },
  { bookId: 3, name: "Clean Architecture" },
];

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Initial display of Add Book Component", () => {
  it("should display with empty Name input value when first loaded", () => {
    render(
      <AddBookComponentBefore
        loadBooks={mockLoadBooksFunction}
        addBook={mockAddBookFunction}
      />
    );

    const input = screen.getByLabelText("Name");

    expect(input).toHaveValue("");
  });

  it("should display with empty Author input value when first loaded", () => {
    render(
      <AddBookComponentBefore
        loadBooks={mockLoadBooksFunction}
        addBook={mockAddBookFunction}
      />
    );

    const input = screen.getByLabelText("Author");

    expect(input).toHaveValue("");
  });
});

describe("Add Book Component reflects user input", () => {
  it("should display user input when typed into Name control", async () => {
    // Arrange
    render(
      <AddBookComponentBefore
        loadBooks={mockLoadBooksFunction}
        addBook={mockAddBookFunction}
      />
    );

    const input = screen.getByLabelText("Name");

    // Act
    await userEvent.type(input, "Macbeth");

    // Assert
    expect(input).toHaveValue("Macbeth");
  });

  it("should display user input when typed into Author control", async () => {
    // Arrange
    render(
      <AddBookComponentBefore
        loadBooks={mockLoadBooksFunction}
        addBook={mockAddBookFunction}
      />
    );

    const input = screen.getByLabelText("Author");

    // Act
    await userEvent.type(input, "William Shakespeare");

    // Assert
    expect(input).toHaveValue("William Shakespeare");
  });
});

describe("Save button click is handled by the Add Book Component", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it("should not call the mockAddBookFunction when Save button clicked when inputs are empty", async () => {
    // Arrange
    const { container } = render(
      <AddBookComponentBefore
        loadBooks={mockLoadBooksFunction}
        addBook={mockAddBookFunction}
      />
    );

    const form = container.querySelector(".add-book-form");

    // Act
    await form.submit();

    // Assert
    expect(mockAddBookFunction).not.toHaveBeenCalled();
  });

  it("should call the mockAddBookFunction when Save button clicked - with the name and auther entered by the user", async () => {
    // Arrange
    render(
      <AddBookComponentBefore
        loadBooks={mockLoadBooksFunction}
        addBook={mockAddBookFunction}
      />
    );

    const nameInput = screen.getByLabelText("Name");
    await userEvent.type(nameInput, "Macbeth");

    const authorInput = screen.getByLabelText("Author");

    await userEvent.type(authorInput, "William Shakespeare");

    const button = screen.getByRole("button");

    // Act
    await userEvent.click(button);

    // Assert
    expect(mockAddBookFunction).toBeCalledWith({
      name: "Macbeth",
      author: "William Shakespeare",
    });
  }, 1000000);
});
