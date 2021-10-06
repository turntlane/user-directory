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

  handleFirstNameChange = (e) => {
    this.setState({
      name: {
        first: e,
      },
    });
  };

  handleLastNameChange = (e) => {
    this.setState({
      name: {
        last: e,
      },
    });
  };

  handleCityChange = (e) => {
    this.setState({ city: e });
  };

  handleCountryChange = (e) => {
    this.setState({ country: e });
  };

  handleEmployerChange = (e) => {
    this.setState({ employer: e });
  };

  handleTitleChange = (e) => {
    this.setState({ title: e });
  };

  submitEdit = () => {
    let activeIndex = this.state.activeIndex;
    console.log(data);
    data.splice(activeIndex, 1, {
      name: {
        first: this.state.name.first,
        last: this.state.name.last,
      },
      city: this.state.city,
      country: this.state.country,
      employer: this.state.employer,
      title: this.state.title,
      favoriteMovies: this.state.favoriteMovies,
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

        <div className="info-container">
          {!this.state.isActive ? (
            <h1 className="hard-name">
              {data[this.state.activeIndex].name.first}{" "}
              {data[this.state.activeIndex].name.last}
            </h1>
          ) : (
            <div>
              <input
                className="hard-name"
                onChange={(e) => this.handleFirstNameChange(e.target.value)}
                placeholder={`${data[this.state.activeIndex].name.first} ${
                  data[this.state.activeIndex].name.last
                }`}
              />
            </div>
          )}

          {!this.state.isActive ? (
            <h3 className="headers">
              From: {data[this.state.activeIndex].city},{" "}
              {data[this.state.activeIndex].country}
            </h3>
          ) : (
            <div>
              <input
                onChange={(e) => this.handleCityChange(e.target.value)}
                placeholder={`${data[this.state.activeIndex].city} ${
                  data[this.state.activeIndex].country
                }`}
              />
              <input
                onChange={(e) => this.handleCountryChange(e.target.value)}
                placeholder={`${data[this.state.activeIndex].country}`}
              />
            </div>
          )}

          {!this.state.isActive ? (
            <h3 className="headers">
              Job Title: {data[this.state.activeIndex].title}
            </h3>
          ) : (
            <input
              onChange={(e) => this.handleTitleChange(e.target.value)}
              placeholder={`${data[this.state.activeIndex].title}`}
            />
          )}

          {!this.state.isActive ? (
            <h3 className="headers">
              Employer: {data[this.state.activeIndex].employer}
            </h3>
          ) : (
            <input
              onChange={(e) => this.handleEmployerChange(e.target.value)}
              placeholder={`${data[this.state.activeIndex].employer}`}
            />
          )}

          {!this.state.isActive ? (
            <div>
              <h3 className="headers">Favorite Movies: </h3>

              <ol className="movies">
                <li>{data[this.state.activeIndex].favoriteMovies[0]}</li>
                <li>{data[this.state.activeIndex].favoriteMovies[1]}</li>
                <li>{data[this.state.activeIndex].favoriteMovies[2]}</li>
              </ol>
            </div>
          ) : (
            <div>
              <input
                placeholder="favorite movies"
                onChange={(e) =>
                  this.setState({
                    favoriteMovies: [
                      e.target.value,
                      this.state.favoriteMovies[1],
                      this.state.favoriteMovies[2],
                    ],
                  })
                }
              />
              <input
                placeholder="favorite movies"
                onChange={(e) =>
                  this.setState({
                    favoriteMovies: [
                      this.state.favoriteMovies[0],
                      e.target.value,
                      this.state.favoriteMovies[2],
                    ],
                  })
                }
              />
              <input
                placeholder="favorite movies"
                onChange={(e) =>
                  this.setState({
                    favoriteMovies: [
                      this.state.favoriteMovies[0],
                      this.state.favoriteMovies[1],
                      e.target.value,
                    ],
                  })
                }
              />
            </div>
          )}
        </div>

        {this.isActive ? null : (
          <button onClick={this.submitEdit}>final</button>
        )}

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
        </div>

        <button className="forward-btn" onClick={this.tick}>
          Next {rarrow}
        </button>
      </div>
    );
  }
}

export default Info;
