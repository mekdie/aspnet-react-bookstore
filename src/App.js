import "./App.css";
import { books } from "./data/MockData";
import { useEffect, useState } from "react";

function App() {
  const [booksList, setBooksList] = useState(books);
  return (
    <div className="App">
      {booksList.map((book) => {
        return (
          <>
            <h1>{book.name}</h1>
            <h3>{book.id}</h3>
          </>
        );
      })}
    </div>
  );
}

export default App;
