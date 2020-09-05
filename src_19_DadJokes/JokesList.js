import React, { Component } from "react";
import Joke from "./Joke";
import axios from "axios";
import "./JokeList.css";

export default class Jokeslist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: JSON.parse(window.localStorage.getItem('jokes') || "[]"),
    };

    this.scoreJoke = this.scoreJoke.bind(this);
    this.handleClick=this.handleClick.bind(this)
  }
  static defaultProps = {
    numberJokes: 10,
  };

  componentDidMount() {
   if(this.state.joke.length===0)
   this.getJokesAPI()
  }
  async getJokesAPI() {
    let jokeArray = [];
    while (jokeArray.length < this.props.numberJokes) {
      const fetchJoke = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      let newJoke = {
        joke: fetchJoke.data.joke,
        id: fetchJoke.data.id,
        score: 0,
      };
      jokeArray.push(newJoke);
      jokeArray = [...new Set(jokeArray)];
      console.log(jokeArray)
    }
    this.setState({joke: [...this.state.joke,...jokeArray]});
    
    window.localStorage.setItem("jokes", JSON.stringify(jokeArray));
   
  }

  scoreJoke(vote, id,e) {
    let newScoreJoke = this.state.joke.map((j) => {
      if (id === j.id) {
        if (vote === "+") {
          return { ...j, score: j.score + 1 };
        } else if (vote === "-") {
          return { ...j, score: j.score - 1 };
        }
      } else {
        return j;
      }
    });
    this.setState({ joke: newScoreJoke.sort((a,b)=>{return (b.score)-(a.score)}) });
    e.preventDefault()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    window.localStorage.setItem("jokes", JSON.stringify(this.state.joke));
  }
  handleClick(){
    this.getJokesAPI()
}



  render() {
    return (
      <div className="joke-list">
        {this.state.joke.map((j) => (
          <Joke
            joke={j.joke}
            score={j.score}
            id={j.id}
            updateScore={this.scoreJoke}
          />
        ))}
        <button onClick={this.handleClick}>10 new jokes </button>
      </div>
    );
  }
}
