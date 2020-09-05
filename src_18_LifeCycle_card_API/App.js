import React, { Component } from "react";
import "./App.css";
import Deck from "./Deck";

// Cycle life components
class App extends Component {
 
  render() {
    return (
      <div className="App">
       <h1>CARD API</h1>
       <Deck/>
      </div>
    );
  }
}

export default App;
