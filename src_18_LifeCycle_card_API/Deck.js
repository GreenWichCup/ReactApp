import React, { Component } from "react";
import Card from "./Card";
import uuid from "uuid/dist/v4";

const urlDeck ="https://deckofcardsapi.com/api/deck";


export default class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardDrawed: [],
      cardRemaining: undefined,
      deck_id: undefined,
      drawCounter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const deckFetch = await fetch(
     `${urlDeck}/new/shuffle`
    );
    const deckJson = await deckFetch.json();
    this.setState({
      cardRemaining: deckJson.remaining,
      deck_id: deckJson.deck_id,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevState);
    console.log("state update");
    console.log(this.state);
  }

  componentWillUnmount() {}

  async drawCard() {

    let deck_id = this.state.deck_id;
    try {  
        const cardFetch = await fetch(`${urlDeck}/${deck_id}/draw/`);
        const cardJson = await cardFetch.json();
        if(cardJson.remaining===0){
            throw new Error("Out of cards!")
        }
        const propsCard = {
            value: cardJson.cards[0].value,
            image: cardJson.cards[0].images.png,
          };
          this.setState((st) => ({
            cardDrawed: [...st.cardDrawed, propsCard],
            drawCounter: st.drawCounter + 1,
            cardRemaining: st.cardRemaining - 1,
          }));
    } catch (err) {
        alert(err)
    }
  }
  handleClick(e) {
      if(this.state.cardRemaining!==0)
    this.drawCard()
    else{
        e.preventDefault()
    }
  }

  render() {
      const outOfCards = this.state.cardRemaining !== 0;
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>{outOfCards ? "Gimme a card !" : "Out off cards " }</button>
        </div> 

          {outOfCards&& this.state.cardDrawed.map((c) => (          
              <Card key={uuid()} url={c.image} value={c.value} />        
          ))}
       
      </div>
    );
  }
}
