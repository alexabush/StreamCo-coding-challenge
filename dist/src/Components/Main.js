import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Main.css';

class Main extends Component {
  state = {
    redirect: false,
    redirectLocation: ''
  };

  redirectToNewScreen = name => {
    console.log('clicked');
    this.setState({ redirect: true });
    this.setState({ redirectLocation: name.toLowerCase() });
  };

  render() {
    if (this.state.redirect) {
      let redirectLocation = this.state.redirectLocation;
      return <Redirect to={`/${redirectLocation}`} />;
    }

    return (
      <div className="Main">
        <div className="Product-Container">
          <div
            className="Main__product-div"
            onClick={() => {
              this.redirectToNewScreen('series');
            }}
          >
            <h2>Series</h2>
          </div>
          <p>Popular Movies</p>
        </div>
        <div className="Product-Container">
          <div
            className="Main__product-div"
            onClick={() => {
              this.redirectToNewScreen('movies');
            }}
          >
            <h2>Movies</h2>
          </div>
          <p>Popular Series</p>
        </div>
      </div>
    );
  }
}

export default Main;
