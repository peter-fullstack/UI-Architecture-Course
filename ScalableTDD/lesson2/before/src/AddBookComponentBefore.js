const AddBookComponentBefore = ({ addBook, loadBooks }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    // Complex javascript to locate the two input controls on the form
    const nameInput = currentTarget.firstElementChild?.lastElementChild;
    const bookName = nameInput?.value;

    const authorInput = currentTarget.children[1]?.children[1];
    const author = authorInput?.value;

   if (bookName && author) {
      await addBook({
        name: bookName,
        author: author,
      });
      //loadBooks();
      e.target.reset();
    }
  };

  return (
    <div className="add-book">
      <h2>Add book</h2>
      <form onSubmit={onSubmit} className="add-book-form">
        <div className="add-book-form__item">
          <label htmlFor="name">Name</label>
          <input id="name" required placeholder="Enter name" />
        </div>
        <div className="add-book-form__item">
          <label htmlFor="author">Author</label>
          <input id="author" required placeholder="Enter author" />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddBookComponentBefore;
