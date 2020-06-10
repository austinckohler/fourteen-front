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
      <div>
        <h1>FourteeneReady?</h1>
        <Favorites favorites={this.state.favorites} />
        <WeatherContainer
          weather={this.state.weather}
          addToFav={this.addToFav}
        />
      </div>
    );
  }
}

export default App;
