import React, { Component } from 'react';
import "./App.css";
import Dice from "./Dice"


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Yathzee Gamme</h1>
        <Dice/>     
      </div>
    )
  }
}

export default App