import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  state = {
    books: [],
    habit: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data, habit: "" }))
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (true) {
      API.saveBook({
        username: "testusername",
        password: "testpassword",
        habit: this.state.habit,
        dayCounter: 0,
        dailyStatus: 0
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter Habit to Make or Break</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.habit}
                onChange={this.handleInputChange}
                name="habit"
                placeholder="ENTER A NEW HABIT"
              />
              <FormBtn onClick={this.handleFormSubmit}> Submit Habit </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Current Habits</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                <table cellpadding="10">
                  {this.state.books.map(book => (
                    <tr>
                      <ListItem key={book._id}>
                        <td>{book.username}</td>
                        <td>{book.habit}</td>
                        <td>Day Streak: {book.dayCounter}</td>
                        <td>Today's Status: {book.dailyStatus}</td>
                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                      </ListItem>
                    </tr>
                  ))}
                </table>
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
