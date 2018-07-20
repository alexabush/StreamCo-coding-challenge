import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import Series from './Series/Series';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={RenderHome} />
        <Route exact path="/movies" component={RenderMovies} />
        <Route exact path="/series" component={RenderSeries} />
      </div>
    );
  }
}

const RenderHome = () => (
  <div className="App">
    <Home />
  </div>
);

const RenderMovies = () => (
  <div className="App">
    <Movies />
  </div>
);

const RenderSeries = () => (
  <div className="App">
    <Series />
  </div>
);

export default App;
