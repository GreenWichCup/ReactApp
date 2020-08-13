import React, { Component } from 'react'
import "./App.css";
import Lottery from "./Lottery"
import "./Lottery.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lottery/>
        <Lottery title= "Mini Lotto" maxNum={10} maxBalls={4}/>
      </div>
    )
  }
}

export default App