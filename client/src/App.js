import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
class App extends React.Component {
  constructor (){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    axios.get("http://localhost:5000/api/players")
    .then(res => this.setState({ players: res.data}))
    .catch(err => { console.log(err)})

  }
  render() {
    return (
      <div className="App">
        
        {this.state.players.map((player, index) => {
          return (
            <div key={index}>
              {player.name}, Country: {player.country}, Searches: {player.searches}
              <hr />
              
            </div>
          )
        })
        }

      </div>
    );
  }
}
export default App;
