import React, { Component } from "react";
import Die from "./Die";
import "./Dice.css";

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faceVal1: "one",
      faceVal2: "one",
      animation: false
    };
    this.rollDie = this.rollDie.bind(this);
  }
  static defaultProps = {
    dieFaces: ["one", "two", "three", "four", "five", "six"],
  };
  rollDie() {
    const ranFace1 = this.props.dieFaces[
      Math.floor(Math.random() * this.props.dieFaces.length)
    ];
    const ranFace2 = this.props.dieFaces[
      Math.floor(Math.random() * this.props.dieFaces.length)
    ];
    this.setState({ faceVal1: ranFace1, faceVal2: ranFace2,animation:true});
    setTimeout(() => {
        this.setState({animation:false})
    }, 1000);
  }
  render() {
    return (
      <div className ="styleDice">
        <div className={this.state.animation===true? "styleDiceAnimation":""}>
        <Die face={this.state.faceVal1} />
        <Die face={this.state.faceVal2} />
        </div>
        <button onClick={this.rollDie} disabled={this.state.animation}> {this.state.animation === true ? "Rolling..." : "Roll dice!"} </button>
      </div>
    );
  }
}
export default Dice;
