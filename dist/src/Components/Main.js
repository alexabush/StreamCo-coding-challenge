import React, { Component } from 'react';
import axios from 'axios';
import './Main.css';
import Product from './Product';
import sample from '../feed/sample.json';

class Main extends Component {
  state = {
    shows: []
  };

  async componentDidMount() {
    // ######### Use provided JSON #########
    let recentMovies = sample.entries.filter(data => {
      return data.releaseYear >= 2010;
    });
    let firstMovies = recentMovies.slice(0, 21);
    let sortedMovies = firstMovies.sort((a, b) => {
      if (a.title < b.title) return -1;
      else if (b.title < a.title) return 1;
      else return 0;
    });
    debugger;
    this.setState(() => {
      return { shows: sortedMovies };
    });
    // ######### Use external API #########
    // let data = [];
    // let pageNum = 1;
    // while (data.length < 21) {
    //   const movies = await requestMovieData(pageNum);
    //   pageNum++;
    //   data.push(...movies);
    // }
    // if (data.length > 20) data = data.slice(0, 21);
    // data.sort((a, b) => {
    //   if (a.title < b.title) return -1;
    //   else if (b.title < a.title) return 1;
    //   else return 0;
    // });
    // this.setState(() => {
    //   return { shows: data };
    // });
  }
  render() {
    const showLis = this.state.shows.map(({ title, poster_path: image }) => {
      return (
        <div className="Product-Container">
          <Product title={title} image={image} />
          <p>{title}</p>
        </div>
      );
    });
    return (
      <div className="Main">
        <ul>{showLis}</ul>
      </div>
    );
  }
}

export default Main;

function extractReleaseDate(date) {
  return +date.split('-')[0];
}

async function requestMovieData(pageNum) {
  const rawData = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=f880972ede05c8f020ba24c3848b66bf&language=en-US&sort_by=popularity.desc&page=${pageNum}`
  );
  return rawData.data.results.filter(data => {
    return extractReleaseDate(data.release_date) >= 2010;
  });
}
