// imports from vendors
import React from 'react';

import getRouter from './router';

export default class App extends React.Component {

  render() {
    return <div>{ getRouter() }</div>;
  }

}
