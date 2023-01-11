import React, { Component } from 'react';

export default class MensagemInicial extends Component {
  render() {
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.

        </p>
      </div>
    );
  }
}
