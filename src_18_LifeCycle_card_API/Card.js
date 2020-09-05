import React, { Component } from 'react'

export default class Card extends Component {
    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { }

    componentWillUnmount() {
        
    }

    render() {
        return (
          <img src={this.props.url} alt={this.props.value}/>
        )
    }
}
