import React from 'react';
import PropTypes from 'prop-types';

export default class Main extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className="Main">
        <div className="Main__content">
          {this.props.children}
        </div>
      </div>
    )}

}
