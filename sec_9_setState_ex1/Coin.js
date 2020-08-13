import React, { Component } from 'react'
import "./Coin.css"

class Coin extends Component {
   
    render() {
        return (
            <div>
                <img className="coin" src={this.props.faceCoin} alt={this.props.altCoin}/>    
            </div>
        )
    }
}

export default Coin
