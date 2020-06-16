import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Peaks from "./components/Peaks";
import PeaksCard from "./components/PeaksCard";
// import { Container } from "@material-ui/core";
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
        <SignInSide />
        <NavBar />
        <div className="hero">
          <div className="call-to-action">
            {" "}
            <h1 className="title">FourteeneReady?</h1>
            <p>Want to find see what 14ers you've done? What you do need? </p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <Peaks peaks={this.state.peaks} />
        <PeaksCard />
        {/* <p>
          {.map((peak) => [
            peak.name,
            peak.elevation,
            peak.long,
            <img src={peak.image} className="mountain-photos" />,
          ])}
        </p> */}
      </>
    );
  }
}

export default App;
