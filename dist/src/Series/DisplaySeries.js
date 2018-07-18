import React, { Component } from 'react';
import './DisplaySeries.css';
import Product from '../Components/Product';
import sample from '../feed/sample.json';

class DisplaySeries extends Component {
  state = {
    series: []
  };

  async componentDidMount() {
    let recentseries = sample.entries.filter(data => {
      return data.releaseYear >= 2010;
    });
    let firstseries = recentseries.slice(0, 21);
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
    const showLis = this.state.series.map(({ title, poster_path: image }) => {
      return (
        <div className="Product-Container">
          <Product title={title} image={image} />
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
