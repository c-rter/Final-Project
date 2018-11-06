import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Login from "../Login/Login";

var userValue = {};
var passValue = {} 

class Goals extends Component {
  state = {
    goals: [],
    habit: ""
  };

  componentDidMount() {
    userValue = this.props.location.userValue;
    passValue = this.props.location.passValue;
    alert("Welcome, " + userValue + "!");
    alert("Your password is " + passValue + "!");
    this.loadGoals();
  }

  loadGoals = () => {
    API.getGoals()
    .then(res =>
      {
      var goalSelection = res;
      var currentGoals = [];
      var nameToCompare = userValue;

      for (var i=0; i<goalSelection.data.length; i++) {
        if (nameToCompare==goalSelection.data[i].username)
          {
            if (goalSelection.data[i].habitStatus=="active")
              {
                currentGoals.push(goalSelection.data[i]);
              }
          }
      }      
      this.setState({ goals: currentGoals, habit: ""})
      }
    )
    .catch(err => console.log(err));
  };


  deleteGoal = id => {
    API.deleteGoal(id)
      .then(res => this.loadGoals())
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
      API.saveGoal({
        username: userValue,
        password: passValue,
        habit: this.state.habit,
        dayCounter: 0,
        dailyStatus: 0,
        habitStatus: "active" 
      })
        .then(res => this.loadGoals())
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
            <Link to={"/halloffame/"}>HALL OF FAME</Link><br/>
            <Link to={"/hallofshame/"}>HALL OF SHAME</Link><br/><br/>
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
            {this.state.goals.length ? (
              <List><table cellpadding="10">
                {this.state.goals.map(goal => (
                  <tr><ListItem key={goal._id}>
                      <td>
                        {goal.username}
                      </td>
                      <td>
                        {goal.habit}
                      </td>
                      <td>
                       Day Streak: {goal.dayCounter}
                      </td>
                      <td>
                       Today's Status: {goal.dailyStatus}
                      </td>
                    <DeleteBtn onClick={() => this.deleteGoal(goal._id)} />
                  </ListItem></tr>
                ))}
              </table></List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Goals;
