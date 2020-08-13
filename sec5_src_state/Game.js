import React, { Component } from 'react'

class Game extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: 60,
            gameOver:false     
        }
    }
   
    render() {
        return (
            <div>
                <h1>The time remaining before the interview is {this.state.time}</h1>
            </div>
        )
    }
}

export default Game
