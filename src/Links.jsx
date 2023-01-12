import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ShopCart from './pages/ShopCart';

export default class Links extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ ShopCart } />
      </Switch>
    );
  }
}
