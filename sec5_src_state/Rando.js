import React, { Component } from "react";

class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0, clicked: false };
    this.runChrono = this.runChrono.bind(this);
    this.chrono = this.chrono.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ clicked: true });
  }
  runChrono() {
    const self = this;
    setInterval(() => {
      self.chrono();
    }, 1000);
  }
  chrono() {
    let add= this.state.num+1
    this.setState({ num: add });
  }
  render() {
    return (
      <div>
        <h1 onClick={this.runChrono}>The clock is ticking {this.state.num}</h1>
        <h1>{this.state.clicked ? "CLICKED!!!" : "NOT CLICKED :( "}</h1>
        <button onClick={this.handleClick}>Click Me!!!</button>
      </div>
    );
  }
}

export default Rando;
