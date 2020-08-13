import React, { Component } from 'react'

class Bound extends Component {
    constructor(props) {
        super(props)

        this.state = {
           second: 0,
           minute: 0,
           hour: 0     
        }
    }

    handleClick = () => {
        this.handleTime();
    }

    handleTime = () => {
      
        setInterval(() => {
           const addSecond = this.state.second + 1;
           this.setState({second: addSecond})
           console.log(this.state.second);
        }, 1000);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>start timer</button>
                <p>There is <span>{this.state.second}</span> seconds left</p>
            </div>
        )
    }
}

export default Bound
