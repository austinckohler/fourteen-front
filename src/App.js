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
  //toggle completed
  markComplete = (id) => {
    this.setState({
      supplies: this.state.supplies.map((supply) => {
        if (supply.id === id) {
          supply.completed = !supply.completed;
        }
        return supply;
      }),
    });
  };
  //deletes supply
  delSupply = (id) => {
    this.setState({
      supplies: [...this.state.supplies.filter((supply) => supply.id !== id)],
    });
  };
  //add supply
  // addSupply = (category, item) => {
  //   const newSupply = {
  //     id,
  //     title,
  //     completed: false,
  //   };
  //   this.setState({ supplies: [...this.state.supplies, newSupply] });
  // };

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
        <Login
          supplies={this.state.supplies}
          markComplete={this.markComplete}
          delsupply={this.delSupply}
        />
      </>
    );
  }
}

export default App;
