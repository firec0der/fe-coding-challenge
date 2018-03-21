// imports from vendors
import React from 'react';

export default class Loading extends React.PureComponent {

  render() {
    return (
      <div className="Loading">
        <div className="Loading__Image" />
        <div className="Loading__Title">Loading...</div>
        <div className="Loading__Text">Please wait</div>
      </div>
    );
  }

}
