import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './pages/Search';

export default class Links extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Search } />
      </Switch>
    );
  }
}
