import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {

  render() {
    return (
      <div className="Header">
        <div className="Header__text">Protetiko FE coding challenge</div>
        <div className="Header__nav">
          <Link to="/" className="Header__link">Home</Link>
          <Link to="/orders" className="Header__link">Orders</Link>
        </div>
      </div>
    )}

}
