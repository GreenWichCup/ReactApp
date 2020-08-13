import React, { Component } from 'react'
import "./Box.css"
import {choice} from "./helpers"

class Box extends Component {
    constructor(props) {
        super(props)

        this.state = {
            colorBox:  choice(this.props.gameColor)
        }
        this.handleClick= this.handleClick.bind(this)
    }
    static defaultProps= {
            gameColor: ["blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal",],    
           
    }

    handleClick(){
        this.pickRandomColor()
     }

    pickRandomColor(){ 
        let newBoxColor = choice(this.props.gameColor);
        this.setState(st =>{return {colorBox: newBoxColor}})
       
    }

    render() {
        console.log(this.state.colorBox)
        return (
            <div className="Box" onClick={this.handleClick} style={{backgroundColor: `${this.state.colorBox}`}}>
                
            </div>
        )
    }
}

export default Box
