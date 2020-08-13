import React, { Component } from "react";

class RandomNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    this.throwNumber = this.throwNumber.bind(this);
  }
  throwNumber() {
    const random = Math.ceil(Math.random() * 10);
    this.setState({ number: random });
    if(random===7){
        document.getElementById('button').remove();
    }
  }

  render() {
    
    return (
      <div>
        <h2>Number is {this.state.number} </h2>
        <button id="button" onClick={this.throwNumber}>random!!</button>
        {this.state.number === 7 && <h3> "You win!!"</h3>}
      </div>
    );
  }
}

export default RandomNum;
