// imports from vendors
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// imports from pages
import { HomePage, OrderPage, OrdersPage } from './pages';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/orders" component={OrdersPage} />
      <Route path="/orders/:orderId" component={OrderPage} />
    </Switch>
  </BrowserRouter>
);
