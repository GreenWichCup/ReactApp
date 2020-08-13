import React, { Component } from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let titleHand;
    if (this.props.isWinner) {
      titleHand = (
          <h2 className= "Poke-Winner">Winning Hand</h2>
      );
    } else {
      titleHand = (
          <h2 className= "Poke-Loser">Losing Hand</h2>
      );
    }

    return (
      <div className="Pokedex">
        {titleHand}
        <h4>EXP TOTAL : {this.props.exp} </h4>
        <div className="Pokedex-Cards">
          {this.props.pokemon.map((item) => {
            return (
              <PokeCard
                name={item.name}
                id={item.id}
                type={item.type}
                xp={item.base_experience}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;
