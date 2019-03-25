import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options'
import AddOption from './components/AddOption'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

export default App;
