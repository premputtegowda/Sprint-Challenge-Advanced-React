import React from 'react';
import PlayerList from './components/PlayerList';
import Nav from './components/Nav';
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
        <Nav />
        <PlayerList players={this.state.players} />
          

      </div>
    );
  }
}
export default App;
