import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  render() {
    const { product, addToCart, productID } = this.props;
    return (
      <div>
        <div data-testid="product">
          <h2 data-testid="product-detail-name">{ product.title }</h2>
          <img
            src={ product.thumbnail }
            alt="produto"
            data-testid="product-detail-image"
          />
          <p data-testid="product-detail-price">{ product.price }</p>
          <Link
            data-testid="product-detail-link"
            to={ `/details/${product.id}` }
          >
            detalhes do produto

          </Link>
        </div>
        <button
          data-testid={ productID }
          type="button"
          onClick={ () => addToCart(product) }
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
