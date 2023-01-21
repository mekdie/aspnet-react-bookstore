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
        let searchFilter = books.filter((book) =>
            book.name.toLowerCase().includes(search.toLowerCase())
        );
        setBooksList(searchFilter);
    }, [search]);

    const reserveBook = (id) => {
        //reserve book here and changed the reserved value to true
        const bookingId = crypto.randomUUID();
        alert(`Booking ID: ${bookingId}`);
        const index = booksList.findIndex((book) => book.id === id);

        const copy = [...booksList]; //make a copy
        copy[index] = {
            ...books[index],
            ...{ reserved: true, bookingId: bookingId },
        }; //update the value using es6 spread operator
        setBooksList(copy);
    };

    const cancelBook = (bookingId) => {
        const index = booksList.findIndex(
            (book) => book.bookingId === bookingId
        );

        const copy = [...booksList]; //make a copy
        copy[index] = {
            ...books[index],
            ...{ reserved: false },
        }; //update the value using es6 spread operator
        setBooksList(copy);
    };

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
                    {booksList &&
                        booksList.map((book, index) => {
                            return (
                                <tr key={book.id}>
                                    <td>{index + 1}</td>
                                    <td>{book.name}</td>
                                    <td>{book.reserved ? "Yes" : "No"}</td>
                                    <td>
                                        <Button
                                            onClick={() => reserveBook(book.id)}
                                            variant={
                                                book.reserved
                                                    ? "secondary"
                                                    : "primary"
                                            }
                                            disabled={
                                                book.reserved ? true : false
                                            }
                                        >
                                            {book.reserved
                                                ? "Reserved"
                                                : "Reserve"}
                                        </Button>{" "}
                                        <Button
                                            onClick={() =>
                                                cancelBook(book.bookingId)
                                            }
                                            variant="danger"
                                        >
                                            Cancel
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
            {booksList.length === 0 && <h4>No books found</h4>}
        </div>
    );
}

export default App;
