import React, { Component } from "react";
import "./App.css";
import Jokeslist from "./JokesList";


// Cycle life components
class App extends Component {

 
 
  render() {
    return (
      <div className="App">
          <Jokeslist/>
      </div>
    );
  }
}

export default App;
