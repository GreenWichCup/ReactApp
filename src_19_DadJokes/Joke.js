import React, { Component } from "react";
import "./Joke.css"

export default class Joke extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {}

 
  handleClick(e) {
    console.log(e.target.value)
    const vote =e.target.value;
    this.props.updateScore(vote,this.props.id)
  }

  render() {
    return (
      <div className="joke">
        <button value="+" onClick={this.handleClick}>
           +
        </button>
        <span> {this.props.score} </span>
        <button value="-" onClick={this.handleClick}>
          -
        </button>
        <span> {this.props.joke} </span>
        <img src={this.props.face} alt="Out of service"/>
      </div>
    );
  }
}
