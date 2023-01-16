import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import Product from '../components/Product';

export default class ProductDetails extends Component {
  state = {
    pDetails: {},
  };

  componentDidMount() {
    this.handleRequisition();
  }

  handleRequisition = async () => {
    const { match } = this.props;
    const { id } = match.params;
    const produto = await getProductById(id);
    this.setState({
      pDetails: produto,
    });
  };

  redirectToCart = () => {
    const { history } = this.props;
    history.push('/cart');
  };

  render() {
    const { pDetails: { id, title, thumbnail, price } } = this.state;
    return (
      <div>
        <Product
          key={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
        />

        <button
          data-testid="shopping-cart-button"
          type="button"
          onClick={ this.redirectToCart }
        >
          vai pro carrinho
        </button>
      </div>
    );
  }
}
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}.isRequired;
