import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import SandwichCard from '../SandwichCard/SandwichCard.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SandwichCard />
      </div>
    );
  }
}

export default App;
