// imports from vendors
import React from 'react';

export default class HomePage extends React.PureComponent {

  render() {
    return (
      <div className="Home">
        <div className="Home__image" />
        <div className="Home__title">
          Andrey "Joey" Karpenko
        </div>
        <div className="Home__subtitle">
          doing&nbsp;
          <a
            href="https://github.com/joey-ua/fe-coding-challenge"
            className="Home__link"
          >
            Protetiko front-end coding challenge
          </a>
        </div>
        <div className="Home__description">
          Hey! I'm a front-end developer and I'm doing front-end coding challenge from Protetiko.
          Here is some of technologies that I'm going to use:
        </div>
        <div className="Home__tech">
          <div className="Home__title">
            React
          </div>
          <div className="Home__title">
            JSX
          </div>
          <div className="Home__title">
            SCSS
          </div>
          <div className="Home__title">
            Redux
          </div>
          <div className="Home__title">
            ES6
          </div>
        </div>
      </div>
    );
  }

}
