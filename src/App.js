// imports from vendors
import React from 'react';
import { Provider } from 'react-redux';

import getRouter from './router';
import store from './store';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Provider store={store}>
          { getRouter() }
        </Provider>
      </div>
    );
  }

}

