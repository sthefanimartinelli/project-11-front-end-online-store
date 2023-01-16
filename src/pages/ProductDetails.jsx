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

  render() {
    const { pDetails: product } = this.state;
    return (
      <div>
        <Product
          addToCart={ () => this.addToCart(product) }
          key={ product.id }
          product={ product }
          productID="product-detail-add-to-cart"
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
