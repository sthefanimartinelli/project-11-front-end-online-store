import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MensagemInicial from '../components/MensagemInicial';
import { getCategories } from '../services/api';

export default class Search extends Component {
  state = {
    categorias: [],
  };

  async componentDidMount() {
    const categoryList = await getCategories();
    // console.log(categoryList);
    this.setState({
      categorias: categoryList,
    });
  }

  render() {
    const { categorias } = this.state;
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
        <div>
          { categorias.map(({ name, id }) => (
            <button data-testid="category" type="button" key={ id }>{name}</button>
          ))}
          ;
        </div>
      </div>
    );
  }
}
