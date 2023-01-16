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
    categoryList: [],

  };

  async componentDidMount() {
    const categoryList = await getCategories();
    this.setState({
      categorias: categoryList,

    });
  }

  // componentDidUpdate() {
  //   const { produtosCart } = this.state;
  //   localStorage.setItem('produtosCarrinho', JSON.stringify(produtosCart));
  // }

  addToCart = (produto) => {
    // console.log(produto);
    // produto.qtt = 1;
    // const { produtosCart } = this.state;
    // recuperar local storage.
    // verificar oq retornou do local storage.
    // primero caso: primeiro produto add. localStorage.setItem('produtosCarrinho', JSON.stringify([produto])))
    // segundo caso: ja existem um produto, estou add produtos diferentes
    // localStorage.setItem('produtosCarrinho', JSON.stringify([...retornolocalStorage, produto])))
    // terceiro caso: estou add um produto que ja existe, manipular o objeto retornado do local storage
    // JSON.stringify([...retornolocalStorage])))

    if (localStorage.getItem('produtosCarrinho') === null) {
      produto.qqt = 1;
      localStorage.setItem('produtosCarrinho', JSON.stringify([produto]));
    } else {
      const recuperaProdutosCart = JSON.parse(localStorage.getItem('produtosCarrinho'));
      const produtoJaExiste = recuperaProdutosCart
        .some((element) => element.id === produto.id);
      if (!produtoJaExiste) {
        produto.qqt = 1;
        localStorage
          .setItem('produtosCarrinho', JSON
            .stringify([...recuperaProdutosCart, produto]));
      } else {
        const indexProduto = recuperaProdutosCart
          .findIndex((element) => element.id === produto.id);
        recuperaProdutosCart[indexProduto].qqt += 1;
        localStorage
          .setItem('produtosCarrinho', JSON.stringify([...recuperaProdutosCart]));
      }
    }
    // this.setState(() => ({
    //   produtosCart: [...produtosCart, produto],
    // }), () => localStorage.setItem('produtosCarrinho', JSON.stringify(produtosCart)));
  };

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

  handleClickCategory = async ({ target }) => {
    const { id } = target;
    const productCategory = await getProductsFromCategoryAndQuery(id, null);
    // console.log(productCategory);
    this.setState({
      categoryList: productCategory.results,
    });
  };

  render() {
    const { categorias, busca, products, categoryList } = this.state;
    const functionPesquisa = (pesquisa) => (
      pesquisa.map((product) => (
        <Product
          addToCart={ () => this.addToCart(product) }
          key={ product.id }
          product={ product }

        />

      )));

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
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Pesquisa
        </button>
        <Link
          to="/Cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <MensagemInicial />
        <div>
          { categorias.map(({ name, id }) => (
            <button
              id={ id }
              data-testid="category"
              type="button"
              key={ id }
              onClick={ this.handleClickCategory }
            >
              { name }
            </button>
          ))}
          ;
        </div>
        { products.length > 0 ? functionPesquisa(products) : <ProductNotFound />}
        ;
        { categoryList.length > 0 && functionPesquisa(categoryList)}
        ;
      </div>
    );
  }
}
