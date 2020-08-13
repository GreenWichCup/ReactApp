import React, { Component } from 'react';
import "./PokeCard.css";


const url= "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number );

class PokeCard extends Component {
    render() {       
        const srcPoke= `${url}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <h5 className= "PokeCard-title">{this.props.name}</h5>
                <div className="Pokedex-Cards-image">
                <img src={srcPoke} alt="Error"/>       
                </div>
                <div className= "PokeCard-data">Type: {this.props.type}</div>
                <div className= "PokeCard-data">EXP: {this.props.xp}</div> 
            </div> 
        )
    }
}

export default PokeCard


