// imports from vendors
import React from 'react';

export default class Error extends React.PureComponent {

  render() {
    return (
      <div className="Error">
        <div className="Error__Image" />
        <div className="Error__Title">We sorry</div>
        <div className="Error__Text">Some error occurred</div>
      </div>
    );
  }

}
