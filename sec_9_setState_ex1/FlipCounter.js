import React, { Component } from 'react'
import Coin from "./Coin"
import "./flipCounter.css"



class FlipCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flipCounter: 0,
            headCounter : 0,
            trailCounter:0,
            faceNum : 0
        }
        this.handleClick= this.handleClick.bind(this)
    }
    
    static defaultProps = {
        title: "JFK coin",
        face: ["head.jpg","tail.jpg"]   
    }

    generateFace(){
      let val =  Math.floor(Math.random() * this.props.face.length)  
      console.log("val :" +val)
      console.log("sate: "+this.state.faceNum) 
      val === 0 ? this.setState({headCounter: this.state.headCounter+1}) : this.setState({trailCounter: this.state.trailCounter+1})
      return this.setState({faceNum: val,flipCounter:this.state.flipCounter+1})     
    }

    handleClick(){
       this.generateFace()
    }

    render() {
        return (
            <div className="flipCounter">
                <h1>Let's flip a coin</h1>
                <Coin faceCoin={`${this.props.face[this.state.faceNum]}`} alt="error" />
                <button onClick={this.handleClick}>Flip the Coin</button>
                <p> For {this.state.flipCounter}, the JFK's Coin has been on head {this.state.headCounter} times and on {this.state.trailCounter} times </p>
            </div>
        )
    }
}

export default FlipCounter
