import React, { Component } from 'react';
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
        <MensagemInicial />
      </div>
    );
  }
}
