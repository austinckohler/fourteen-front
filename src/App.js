import React, { Component } from "react";
import NavBar from "./Authenticate/NavBar";
import "./App.css";
import Peaks from "./components/PeaksContainer";

import SignInSide from "./Authenticate/SignInSide";
import SuppliesContainer from "./components/SuppliesContainer";
import AddSupply from "./components/AddSupply";

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
  markComplete = (event, id) => {
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
  delSupply = (event, id) => {
    this.setState({
      supplies: [...this.state.supplies.filter((supply) => supply.id !== id)],
    });
    fetch(`http://localhost:3000/supplies/${id}`, {
      method: "DELETE",
    });
  };
  //add supply
  addSupply = (category, item) => {
    const newSupply = {
      item,
      category,
      completed: false,
    };
    this.setState({ supplies: [...this.state.supplies, newSupply] });
  };

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
        <AddSupply addSupply={this.addSupply} />
        <SuppliesContainer
          supplies={this.state.supplies}
          markComplete={this.markComplete}
          delSupply={this.delSupply}
        />
      </>
    );
  }
}

export default App;
