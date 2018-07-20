import React, { Component } from 'react';
import './Series.css';
import Header from '../Components/Header';
import Subheader from '../Components/Subheader';
import DisplaySeries from './DisplaySeries';
import Footer from '../Components/Footer';

class Series extends Component {
  render() {
    return (
      <div>
        <Header />
        <Subheader />
        <DisplaySeries />
        <Footer />
      </div>
    );
  }
}

export default Series;
