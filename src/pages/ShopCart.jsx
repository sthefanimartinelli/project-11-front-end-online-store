import React, { Component } from 'react';
import EmptyCartMsg from '../components/EmptyCartMsg';

export default class ShopCart extends Component {
  state = {
    renderProducts: undefined,
  };

  componentDidMount() {
    this.handleLocalStorage();
  }

  handleLocalStorage = () => {
    const xablau = localStorage.getItem('produtosCarrinho');
    const cartItems = JSON.parse(xablau);
    this.setState({
      renderProducts: cartItems,
    });
  };

  render() {
    const { renderProducts } = this.state;
    console.log(renderProducts);

    return (
      <div>
        {renderProducts ? renderProducts.map((element) => (
          <div key={ element.id }>
            <h1 data-testid="shopping-cart-product-name">{element.title}</h1>
            <img src={ element.thumbnail } alt="produto" />
            <p>{element.price}</p>
            <span data-testid="shopping-cart-product-quantity">{element.qqt}</span>
          </div>
        )) : <EmptyCartMsg /> }

      </div>
    );
  }
}
