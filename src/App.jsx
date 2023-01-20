import "./App.css";
import { books } from "./data/MockData";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [booksList, setBooksList] = useState(books);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search);
    let searchFilter = books.filter((book) =>
      book.name.toLowerCase().includes(search.toLowerCase())
    );
    setBooksList(searchFilter);
  }, [search]);
  return (
    <div className="App">
      <Container className="no-padding">
        <Row>
          <Col>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="form-control mr-sm-4"
              placeholder="Search"
              aria-label="Search"
            />
          </Col>
        </Row>
      </Container>
      <br />
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