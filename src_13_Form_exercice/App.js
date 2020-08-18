import React, { Component } from "react";
import BoxMaker from "./BoxMaker"
import "./App.css";


/** Simple app that just shows the LightsOut game. */
//in this exercice I failed to display the div as a box color ==> Why because I forgot to set units (px, em, etc) 
// I had failed to setState as an array of object  

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoxMaker/>
      </div>
    );
  }
}

export default App;
