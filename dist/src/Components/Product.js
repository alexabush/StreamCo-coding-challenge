import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <img
          className="Product__img"
          src={this.props.images['Poster Art'].url}
          alt="Image"
        />
      </div>
    );
  }
}

export default Product;
