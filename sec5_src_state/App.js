import React, { Component } from 'react';
import "./App.css";
import Game from "./Game"
import Rando from "./Rando"
import Bound from "./Bound"
import RandomNum from './RandomNum';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game/>
        <Rando/>
        <Bound/>
        <RandomNum/>
      </div>
    )
  }
}

export default App
