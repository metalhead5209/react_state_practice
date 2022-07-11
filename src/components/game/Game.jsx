import React, { Component } from "react";

class Game extends Component {
  constructor(props) {
    // Do not setState in constructor, only initialize it
    super(props);
    this.state = {
      score: 0,
      gameOver: false
    };
  }
  render() {
    return (
      <div className="Score">
        <h1>Your Score Is: {this.state.score}</h1>
      </div>
    );
  }
}



export default Game;
