import React, { Component } from "react";
import NavBar from "./Authenticate/NavBar";
import "./App.css";
import Peaks from "./components/PeaksContainer";

import SignInSide from "./Authenticate/SignInSide";
import Login from "./components/Login";

export class App extends Component {
  state = {
    peaks: [],
    supplies: [],
  };

  componentDidMount() {
    this.getPeaks();
    this.getSupplies();
  }

  getSupplies() {
    fetch("http://localhost:3000/supplies")
      .then((response) => response.json())
      .then((supplies) => this.setState({ supplies }));
  }
  getPeaks() {
    fetch("http://localhost:3000/peaks")
      .then((response) => response.json())
      .then((peaks) => this.setState({ peaks }));
  }

  // addToFav = (weather) => {
  //   if (!this.state.favorites.find((coord) => coord.id === weather.id))
  //     this.setState({ favorites: [...this.state.favorites, weather] });
  // };
  render() {
    return (
      <>
        <NavBar />
        <SignInSide title={<h1 className="title">FourteeneReady?</h1>} />
        <Peaks peaks={this.state.peaks} />
        <Login supplies={this.state.supplies} />
      </>
    );
  }
}

export default App;
