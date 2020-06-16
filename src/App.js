import React, { Component } from "react";
import NavBar from "./Authenticate/NavBar";
import "./App.css";
import Peaks from "./components/PeaksContainer";

import SignInSide from "./Authenticate/SignInSide";

export class App extends Component {
  state = {
    peaks: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/peaks")
      .then((response) => response.json())
      .then((peaks) => this.setState({ peaks }));
  }

  photo() {
    console.log("public/photos/antero.jpg");
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
      </>
    );
  }
}

export default App;
