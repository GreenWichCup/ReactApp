import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import ShopList from "./ShopList"


/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
      
        <ShopList/>
       
      </div>
    );
  }
}

export default App;
