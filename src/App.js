import React, { Component } from 'react';
import BasketForm from './containers/BasketForm'
import GoodsList from './containers/GoodsList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> MassMedia Group Test-Task </h1>
       <BasketForm />
        <GoodsList />
      </div>
    );
  }
}

export default App;
