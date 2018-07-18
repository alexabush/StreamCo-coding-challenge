import React, { Component } from 'react';
import './Movies.css';
import Header from '../Components/Header';
import Subheader from '../Components/Subheader';
import DisplayMovies from './DisplayMovies';
import Footer from '../Components/Footer';

class Movies extends Component {
  render() {
    return (
      <div>
        <Header />
        <Subheader />
        <DisplayMovies />
        <Footer />
      </div>
    );
  }
}

export default Movies;
