// imports from vendors
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// layout import
import { Main } from './layouts';

// imports from pages
import { HomePage, OrderPage, OrdersPage } from './pages';

export default () => (
  <BrowserRouter>
    <Main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/orders" component={OrdersPage} />
        <Route path="/orders/:orderId" component={OrderPage} />
      </Switch>
    </Main>
  </BrowserRouter>
);
