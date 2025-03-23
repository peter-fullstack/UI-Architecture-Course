import { useEffect } from "react";

const BookListComponent = ({ dal }) => {
  useEffect(() => {
    dal.loadData();
  }, []);

  return (
    <div className="book-list-container">
      <h2>Books</h2>
      <ul data-testid="book-list">
        {dal.books.map((book) => {
          return <li key={book.bookId}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default BookListComponent;
