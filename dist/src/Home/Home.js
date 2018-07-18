import React, { Component } from 'react';
import './Home.css';
import Header from '../Components/Header';
import Subheader from '../Components/Subheader';
import Main from '../Components/Main';
import Footer from '../Components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Subheader />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;
