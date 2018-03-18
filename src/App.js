// imports from vendors
import React from 'react';
import { Provider } from 'react-redux';

import getRouter from './router';
import store from './store';

import { Main } from './layouts';

export default class App extends React.Component {

  render() {
    return (
      <Main>
        <Provider store={store}>
          { getRouter() }
        </Provider>
      </Main>
    );
  }

}
