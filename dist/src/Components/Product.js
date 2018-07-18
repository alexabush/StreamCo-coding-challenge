import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <img src={this.props.image} alt="" />
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default Product;
