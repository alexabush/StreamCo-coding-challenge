import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h2>DEMO Streaming</h2>
        <div className="Links-Container">
          <a className="Login-Link" href="#">
            Log In
          </a>
          <a className="Free-Trial-Link" href="#">
            Start your free trial
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
