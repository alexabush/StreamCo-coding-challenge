import React, { Component } from 'react';
import './DisplayMovies.css';
import Product from '../Components/Product';
import sample from '../feed/sample.json';

class DisplayMovies extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    let movies = sample.entries.filter(show => {
      return show.programType === 'movie';
    });
    let recentMovies = movies.filter(movie => {
      return movie.releaseYear >= 2010;
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
    const showLis = this.state.movies.map(({ title, images }) => {
      return (
        <div className="DisplayMovies__Product-Container">
          <Product title={title} images={images} />
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
