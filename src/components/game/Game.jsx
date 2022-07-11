import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    // Do not setState in constructor, only initialize it
    super(props);
    this.state = {
      score: 0,
      gameOver: false
    };
    this.addToScore = this.addToScore.bind(this);
  }
  addToScore = e => {
    let num = 10;
    let i = Math.floor(Math.random() * num)
    this.setState({score: i, gameOver: true})
  }
  render() {
    return (
      <div className="Score">
        <h1>Your Score Is: {this.state.score}</h1>
        {this.state.score === 7 && <h2>YOU WIN</h2>}
        <button onClick={this.addToScore}>Roll</button>
      </div>
    );
  }
}



export default Game;
