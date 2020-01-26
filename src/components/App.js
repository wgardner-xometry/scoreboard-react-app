import React, { Component } from "react";

import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [],
  };

  prevPlayerId = 0;

  changeScore = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += delta),
    }));
  };

  addPlayer = name => {
    let player = {
      id: (this.prevPlayerId += 1),
      name,
      score: 0,
    };

    this.setState(prevState => ({
      players: prevState.players.concat(player),
    }));
  };

  removePlayer = id => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id),
    }));
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />
        {/* Player List */}
        {this.state.players.map((player, index) => {
          return (
            <Player
              key={player.id.toString()}
              id={player.id}
              index={index}
              name={player.name}
              score={player.score}
              changeScore={this.changeScore}
              removePlayer={this.removePlayer}
            />
          );
        })}
        <AddPlayerForm addPlayer={this.addPlayer} />
      </div>
    );
  }
}

export default App;
