import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default class Product extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product-detail-link">
        <div data-testid="product">
          <h2 data-testid="product-detail-name">{ title }</h2>
          <img src={ thumbnail } alt="produto" data-testid="product-detail-image" />
          <p data-testid="product-detail-price">{ price }</p>
        </div>
      </div>

    );
  }
}

Product.propTypes = {
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
}.isRequired;
