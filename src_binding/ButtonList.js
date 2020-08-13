import React, { Component } from 'react'
import "./ButtonList.css"

class ButtonList extends Component {
    constructor(props) {
        super(props)

        this.state = {
          bgColor: "purple"       
        }
    }
    static defaultProps = {
        buttonColors: ["cyan", "magenta", "red", "lightblue"]
    }

    pickColor(newColor){
 this.setState({bgColor:newColor})
} 
    

    render() {
        return (
            <div className="buttonList" style= {{backgroundColor:this.state.bgColor}}>
        {  this.props.buttonColors.map((b)=>{
            return <button className="button" style= {{backgroundColor: `${b}`}} onClick={this.pickColor.bind(this,b)}>CLICK ME</button>
        })  }    
            </div>
        )
    }
}

export default ButtonList
