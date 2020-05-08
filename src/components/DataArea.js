import React, { Component } from "react";
import TableData from "./DataTable";
import API from "../utils/API";
import "../styles/DataArea.css";
import "../styles/NavBar.css";

export default class DataArea extends Component {
  state = {
    users: [{}],
    order: "descend",
    //filteredUsers: [{}]
    userInput: ""
  }

  headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "DOB", width: "10%" }
  ]

  handleInputChange = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    //const value = event.target.value;
    //const name = event.target.name;
    const searchList = this.state.users.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ userInput: searchList });
  }

  componentDidMount() {
    API.getData()
      .then(results => {
        this.setState({
          users: results.data.results,
          userInput: results.data.results
      });
    });
  }

  render() {
    return (
      <>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="navbar-collapse row" id="navbarNav">
          <div className="searchbox">
            <form className="form-inline">
              <input className="form-control" type="search"
                placeholder="Search by name/phone number" aria-label="Search"
                onChange = {this.handleInputChange}
              />
            </form>
          </div>
        </div>
      </nav>
        <div className="data-area">
          <TableData
            headings={this.headings}
            users={this.state.userInput}
          />
        </div>
      </>
    );
  }
}
