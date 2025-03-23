import { useState } from "react";
import b from "./fakeBrowser";
import DefaultAccessLayer from './DataAccessLayer';
import BoookList from "./BookListComponent";

export default function App() {
  const [books, setBooks] = useState([]);

  const dal = new Dal(books, setBooks);

  return (
    <div className="App">
      <BoookList dal={dal} />
    </div>
  );
}
