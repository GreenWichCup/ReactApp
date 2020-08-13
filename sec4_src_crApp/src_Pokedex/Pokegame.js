import React, { Component } from 'react'
import Pokedex from "./Pokedex"

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
          { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
          { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
          { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
          { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
          { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
          { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
          { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
          { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
        ],   
      };  
    render() {
        const hand1 = [];
        const hand2 = [...this.props.pokemon];
        while (hand1.length<hand2.length) {
            const randomNumber =  Math.floor(Math.random()*hand2.length);
            const pickInTable = hand2.splice(randomNumber,1)[0];
            hand1.push(pickInTable);
        }
        let totXp1 = hand1.reduce((expt,pokemon)=> expt+pokemon.base_experience,0);
        let totXp2 = hand2.reduce((expt,pokemon)=> expt+pokemon.base_experience,0);
        return (
            <div>
                <Pokedex title= "Hand 1" pokemon={hand1} exp={totXp1} isWinner={totXp1>totXp2}/>
                <Pokedex title= "Hand 2" pokemon={hand2} exp={totXp2} isWinner={totXp2>totXp1}/>
            </div>
        )
    }
}

export default Pokegame;
