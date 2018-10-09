import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, AllProducts } from './components';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/products" component={AllProducts} />
      </Switch>
    );
  }
}

export default Routes;
