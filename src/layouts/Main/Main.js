import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header.js';

export default class Main extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className="Main">
        <Header />
        <div className="Main__content">
          {this.props.children}
        </div>
      </div>
    )}

}
