import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Main.css';
import Product from './Product';

class Main extends Component {
  state = {
    shows: [{ title: 'Movies' }, { title: 'Series' }],
    redirect: false
  };

  redirectToMovies = name => {
    console.log('clicked');
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/movies'} />;
    }
    const showLis = this.state.shows.map(
      ({ title, poster_path: image }, idx) => {
        return (
          <div
            key={idx}
            className="Product-Container"
            onClick={this.redirect(title)}
          >
            <Product title={title} image={image} />
            <p>{title}</p>
          </div>
        );
      }
    );
    return (
      <div className="Main">
        <ul>{showLis}</ul>
      </div>
    );
  }
}

export default Main;
