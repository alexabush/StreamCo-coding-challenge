import React, { Component } from 'react';
import './DisplaySeries.css';
import Product from '../Components/Product';
import sample from '../feed/sample.json';

class DisplaySeries extends Component {
  state = {
    series: []
  };

  async componentDidMount() {
    let series = sample.entries.filter(show => {
      return show.programType === 'series';
    });
    let recentSeries = series.filter(data => {
      return data.releaseYear >= 2010;
    });
    let firstseries = recentSeries.slice(0, 21);
    let sortedseries = firstseries.sort((a, b) => {
      if (a.title < b.title) return -1;
      else if (b.title < a.title) return 1;
      else return 0;
    });
    this.setState(() => {
      return { series: sortedseries };
    });
  }
  render() {
    const showLis = this.state.series.map(({ title, images }) => {
      return (
        <div className="DisplaySeries__Product-Container">
          <Product title={title} images={images} />
          <p>{title}</p>
        </div>
      );
    });
    return (
      <div className="DisplaySeries">
        <ul>{showLis}</ul>
      </div>
    );
  }
}

export default DisplaySeries;
