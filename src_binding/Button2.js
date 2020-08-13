import React, { Component } from 'react'

class Button2 extends Component {
     render() {
        return (
            <li>
               {this.props.value}
               <button onClick={this.props.funcRemove}>X</button>
            </li>
            
        )
    }
}

export default Button2
