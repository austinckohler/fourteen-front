import React, { Component } from "react";
import "./App.css";
import ApiKeys from "./ApiKeys";
import WeatherContainer from "./WeatherContainer";
import Favorites from "./Favorites";

export class App extends Component {
  state = {
    weather: [],
    favorites: [],
  };

  componentDidMount() {
    fetch(`${ApiKeys.base}weather?q=ubud&appid=${ApiKeys.key}`)
      .then((response) => response.json())
      .then((weather) => this.setState({ weather: weather.coord }));
  }

  addToFav = (weather) => {
    if (!this.state.favorites.find((coord) => coord.id === weather.id))
      this.setState({ favorites: [...this.state.favorites, weather] });
  };
  render() {
    return (
      <>
        <div className="hero">
          <div className="call-to-action">
            {" "}
            <h1 className="title">FourteeneReady?</h1>
            <p>Want to find see what 14ers you've done? What you do need? </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <Favorites favorites={this.state.favorites} />
        <WeatherContainer
          weather={this.state.weather}
          addToFav={this.addToFav}
        />
      </>
    );
  }
}

export default App;
