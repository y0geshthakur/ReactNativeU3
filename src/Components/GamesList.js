import axios from 'axios';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import GamesDetails from './GamesDetails';

class GamesList extends Component {
  state = {
    gameslist: [] // Initialize gameslist as an empty array
  };

  componentDidMount() {
    axios
      .get('https://my-json-server.typicode.com/y0geshthakur/mobile/games')
      .then(response => {
        // Check if response.data is an array before setting the state
        if (Array.isArray(response.data)) {
          this.setState({ gameslist: response.data });
        } else {
          console.error("Data received from API is not an array");
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

  renderList = () => {
    return this.state.gameslist.map((games, index) => (
      <GamesDetails key={index} games={games} />
    ));
  };

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderList()}</ScrollView>;
  }
}

export default GamesList;
