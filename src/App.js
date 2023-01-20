import "./App.css";
import { books } from "./data/MockData";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function App() {
  const [booksList, setBooksList] = useState(books);
  return (
    <div className="App">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Reserved?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {booksList.map((book, index) => {
            return (
              <>
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>{book.name}</td>
                  <td>{book.reserved ? "Yes" : "No"}</td>
                  <td>
                    <Button variant="primary">Reserve</Button>{" "}
                    <Button variant="danger">Cancel</Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
