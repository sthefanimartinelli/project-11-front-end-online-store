import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  render() {
    const { title, thumbnail, price, addToCart, id } = this.props;
    return (
      <div>
        <div data-testid="product">
          <h2 data-testid="product-detail-name">{ title }</h2>
          <img src={ thumbnail } alt="produto" data-testid="product-detail-image" />
          <p data-testid="product-detail-price">{ price }</p>
          <Link data-testid="product-detail-link" to={ id }>detalhes do produto</Link>
        </div>
        <button
          type="button"
          onClick={ addToCart }
        >
          add to cart
        </button>
      </div>

    );
  }
}

Product.propTypes = {
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  addToCart: PropTypes.func,
  id: PropTypes.string,
}.isRequired;
