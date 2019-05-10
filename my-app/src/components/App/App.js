import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import SandwichCard from '../SandwichCard/SandwichCard.js'
import * as Sandwiches from '../../data/sandwichService'

class App extends Component {
  render() {
    const sandwiches = Sandwiches.default.sandwiches.map(sandwich => 
    <SandwichCard key={sandwich.id} name={sandwich.name} price={sandwich.price} ingredients={sandwich.ingredients} />)
    return (
      <div>

        <Header />
      <div className="App">
        {sandwiches}
      </div>
      </div>
    );
  }
}

export default App;
