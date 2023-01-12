import React, { Component } from 'react';
import EmptyCartMsg from '../components/EmptyCartMsg';

export default class ShopCart extends Component {
  render() {
    return (
      <div>
        <EmptyCartMsg />
      </div>
    );
  }
}
