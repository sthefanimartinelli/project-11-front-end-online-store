import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MensagemInicial from '../components/MensagemInicial';

export default class Search extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
          id="search"
        />
        <Link
          to="/Cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <MensagemInicial />
      </div>
    );
  }
}
