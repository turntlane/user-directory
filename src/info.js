import React from "react";
import data from "./data";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isActive: false,
      input: "",
      id: 25,
      name: { first: "", last: "" },
      city: "",
      country: "",
      employer: "",
      title: "",
      favoriteMovies: ["", "", ""],
    };
  }
  tick = () => {
    let activeIndex = this.state.activeIndex;
    if (activeIndex === data.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    this.setState({
      activeIndex: activeIndex,
    });
  };

  previousTick = () => {
    let activeIndex = this.state.activeIndex;
    if (activeIndex === data.length - data.length) {
      activeIndex = 0;
    } else {
      console.log(activeIndex);
      activeIndex--;
    }
    this.setState({
      activeIndex: activeIndex,
    });
  };

  deleteButton = () => {
    let activeIndex = this.state.activeIndex;
    if (activeIndex === data.length - data.length) {
      activeIndex = data.length - 1;
    }
    data.splice(activeIndex, 1);
    activeIndex--;
    this.setState({ activeIndex: activeIndex });
  };

  handleActive = () => {
    this.setState({ isActive: true });
    this.setState({
      name: {
        first: data[this.state.activeIndex].name.first,
        last: data[this.state.activeIndex].name.last,
      },
      city: data[this.state.activeIndex].city,
      country: data[this.state.activeIndex].country,
      employer: data[this.state.activeIndex].employer,
      title: data[this.state.activeIndex].title,
    });
  };

  handleEdit = (e) => {
    let firstName = this.state.name;
    firstName.first = e;
    this.setState({ firstName: firstName });
    console.log(this.state);
  };

  submitEdit = () => {
    let activeIndex = this.state.activeIndex;
    console.log(data);
    data.splice(activeIndex, 1, {
      name: {
        first: this.state.name.first,
        last: this.state.name.last,
      },
      city: this.state.city
    });
    this.setState({
      isActive: false,
      activeIndex: activeIndex,
    });
  };

  render() {
    const { activeIndex } = this.state;
    let larrow = "\u003C";
    let rarrow = "\u003E";
    return (
      <div className="outter-container">
        <button onClick={this.handleActive}>edit</button>

        {!this.state.isActive ? (
          <h1 className="name">
            {data[this.state.activeIndex].name.first}{" "}
            {data[this.state.activeIndex].name.last}
          </h1>
        ) : (
          <textarea
            className="name"
            onChange={(e) => this.handleEdit(e.target.value)}
            placeholder={`${data[this.state.activeIndex].name.first} ${
              data[this.state.activeIndex].name.last
            }`}
          />
        )}

        {!this.state.isActive ? (
            <h3 className="headers">
            From: {data[this.state.activeIndex].city},{" "}
            {data[this.state.activeIndex].country}
          </h3>
        ) : (
          <textarea
            className="name"
            onChange={(e) => this.handleEdit(e.target.value)}
            placeholder={`${data[this.state.activeIndex].city} ${
              data[this.state.activeIndex].country
            }`}
          />
        )}

        <button onClick={this.submitEdit}>submit</button>

        <button className="previous-btn" onClick={this.previousTick}>
          {larrow} Previous
        </button>
        <div className="three-button-container">
          <button className="three-btn delete-btn" onClick={this.deleteButton}>
            Delete
          </button>
        </div>
        <div className="content-container">
          <p className="numbers">
            {activeIndex + 1}/{data.length}
          </p>
          {/* 
          <h1 className="name">
            {data[this.state.activeIndex].name.first}{" "}
            {data[this.state.activeIndex].name.last}
          </h1> */}
          <div className="info-container">
            {/* <h3 className="headers">
              From: {data[this.state.activeIndex].city},{" "}
              {data[this.state.activeIndex].country}
            </h3> */}

            <h3 className="headers">
              Job Title: {data[this.state.activeIndex].title}
            </h3>
            <h3 className="headers">
              Employer: {data[this.state.activeIndex].employer}
            </h3>
            <h3 className="headers">Favorite Movies: </h3>
            <p className="movies">
              1. {data[this.state.activeIndex].favoriteMovies}
            </p>
            <p className="movies">
              2. {data[this.state.activeIndex].favoriteMovies}
            </p>
            <p className="movies">
              3. {data[this.state.activeIndex].favoriteMovies}
            </p>
          </div>
        </div>

        <button className="forward-btn" onClick={this.tick}>
          Next {rarrow}
        </button>
      </div>
    );
  }
}

export default Info;
