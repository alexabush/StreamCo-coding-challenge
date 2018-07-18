import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
