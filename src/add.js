import React, { Component } from "react";
import data from "./data";
import Edit from "./edit";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      id: 25,
      name: { first: "", last: "" },
      city: "",
      country: "",
      employer: "",
      title: "",
      favoriteMovies: ['', '', ''],
    };
  }

  handleFirstNameChange = (e) => {
    let firstName = this.state.name;
    firstName.first = e.target.value;
    this.setState({ firstName: firstName });
  };

  handleLastNameChange = (e) => {
    let lastName = this.state.name;
    lastName.last = e.target.value;
    this.setState({ lastName: lastName });
  };

  handleCityChange = (e) => {
    this.setState({ city: e.target.value });
  };

  handleCountryChange = (e) => {
    this.setState({ country: e.target.value });
  };

  handleEmployerChange = (e) => {
    this.setState({ employer: e.target.value });
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleFavoriteMoviesChange = (e, index) => {
    this.setState({
      favoriteMovies: this.state.favoriteMovies.map((movie, i) => {
        if (i === index) return e.target.value;
        return movie;
      })
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let activeIndex = this.state.id;
    data.push(this.state);
    console.log(data);
    this.setState({ id: activeIndex + 1 });
  };

  handleActive = () => {
    this.setState({ isActive: true });
  };







  render() {
    return (
      
      <div className="add-button-container">




        <button className="three-btn add-btn" onClick={this.handleActive}>
          Add
        </button>


        {this.state.isActive ? (
          <form className="add-form" onSubmit={this.handleSubmit}>
            <input
              placeholder="first name"
              value={this.state.name.first}
              onChange={this.handleFirstNameChange}
            />
            <input
              placeholder="last name"
              value={this.state.name.last}
              onChange={this.handleLastNameChange}
            />
            <input
              placeholder="city"
              value={this.state.city}
              onChange={this.handleCityChange}
            />
            <input
              placeholder="country"
              value={this.state.country}
              onChange={this.handleCountryChange}
            />
            <input
              placeholder="employer"
              value={this.state.employer}
              onChange={this.handleEmployerChange}
            />
            <input
              placeholder="title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />

            <input
              placeholder="favorite movies"
              value={this.state.favoriteMovies[0]}
              onChange={(e) => this.handleFavoriteMoviesChange(e, 0)}
            />
            <input
              placeholder="favorite movies"
              value={this.state.favoriteMovies[1]}
              onChange={(e) => this.handleFavoriteMoviesChange(e, 1)}
            />
            <input
              placeholder="favorite movies"
              value={this.state.favoriteMovies[2]}
              onChange={(e) => this.handleFavoriteMoviesChange(e, 2)}
            />

            <button type="submit">submit</button>
          </form>
        ) : null}
      </div>
    );
  }
}

export default Add;
