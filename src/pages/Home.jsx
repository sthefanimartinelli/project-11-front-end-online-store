import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MensagemInicial from '../components/MensagemInicial';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductNotFound from '../components/ProductNotFound';
import Product from '../components/Product';

export default class Search extends Component {
  state = {
    categorias: [],
    busca: '',
    products: [],
  };

  async componentDidMount() {
    const categoryList = await getCategories();

    this.setState({
      categorias: categoryList,
    });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      busca: value,
    });
  };

  handleClick = async () => {
    const { busca } = this.state;
    const produtos = await getProductsFromCategoryAndQuery(null, busca);
    this.setState({
      products: produtos.results,
    });
  };

  render() {
    const { categorias, busca, products } = this.state;
    return (
      <div>
        <input
          type="text"
          name="busca"
          id="busca"
          data-testid="query-input"
          value={ busca }
          onChange={ this.handleChange }
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
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisa
        </button>
        { products.length > 0 ? products.map(({ title, thumbnail, price, id }) => (
          <Product
            key={ id }
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
          />
        )) : <ProductNotFound />}
        ;
      </div>
    );
  }
}
