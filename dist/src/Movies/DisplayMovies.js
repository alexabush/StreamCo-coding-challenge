import React, { Component } from 'react';
import axios from 'axios';
import './DisplayMovies.css';
import Product from '../Components/Product';
import sample from '../feed/sample.json';

class DisplayMovies extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    let recentMovies = sample.entries.filter(data => {
      return data.releaseYear >= 2010;
    });
    let firstMovies = recentMovies.slice(0, 21);
    let sortedMovies = firstMovies.sort((a, b) => {
      if (a.title < b.title) return -1;
      else if (b.title < a.title) return 1;
      else return 0;
    });
    this.setState(() => {
      return { movies: sortedMovies };
    });
  }
  render() {
    const showLis = this.state.movies.map(({ title, poster_path: image }) => {
      return (
        <div className="Product-Container">
          <Product title={title} image={image} />
          <p>{title}</p>
        </div>
      );
    });
    return (
      <div className="DisplayMovies">
        <ul>{showLis}</ul>
      </div>
    );
  }
}

export default DisplayMovies;
