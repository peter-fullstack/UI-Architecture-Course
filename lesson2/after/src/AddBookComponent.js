const AddBookComponent = ({ dal }) => {

    const onSubmit = async (e) => {
      e.preventDefault();
      const { name, author } = e.currentTarget;
      await dal.addBook({
        name: name.value,
        author: author.value
      });
      loadBooks();
      e.target.reset();
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
  
  export default AddBookComponent;
  