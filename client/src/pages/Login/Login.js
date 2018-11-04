import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: "",
      user: "", // for entry
      pwd: "" // for entry
    };
  }

  // Load database
  componentDidMount() {
    this.loadBooks();
  }
  // fn to load database
  loadBooks = () => {
    API.getBooks()
      .then(res => {
        this.state.books = res.data;
        console.log(this.state.books);
      })

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
    if (this.state.user && this.state.pwd) {
      console.log("Form Submit");
      for (var i = 0; i < this.state.books.length; i++) {
        if (
          (this.state.user === this.state.books[i].username) &
          (this.state.pwd === this.state.books[i].password)
        ) {
          console.log("Awesome!");
          window.location.href = "/books";
        } else {
          console.log("HFS broken");
        }
      }
    }
  };

  render() {
    return (
      <Container fluid>
        <Input
          value={this.state.user} //this.state.username
          onChange={this.handleInputChange}
          name="user"
          placeholder="username (required)"
        />
        <Input
          value={this.state.pwd} //this.state.username
          onChange={this.handleInputChange}
          name="pwd"
          placeholder="password (required)"
        />
        <form method="get" action="/books">
          <FormBtn
            disabled={!(this.state.user && this.state.pwd)}
            onClick={this.handleFormSubmit}
          >
            Login
          </FormBtn>
        </form>
      </Container>
    );
  }
}

export default Login;
