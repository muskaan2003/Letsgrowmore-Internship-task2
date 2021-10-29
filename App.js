import Users from "./Component/card.js";
import "./styles.css";
import img1 from './img1/logo.png';
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: true };
    this.showUsers = this.showUsers.bind(this);
  }

  showUsers() {
    document.getElementById("main").style.display = "flex";
    const source = "https://reqres.in/api/users?page=1";
    fetch(source)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark  m-3">
          <div className="container">
            <span>
              <img src={img1} alt=""/>
            </span>
            <button onClick={this.showUsers}>Get Users</button>
          </div>
        </nav>

        <Users loading={this.state.loading} users={this.state.users_data} />
      </>
    );
  }
}

export default App;
