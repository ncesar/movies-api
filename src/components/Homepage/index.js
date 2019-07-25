/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

// external

import Header from '../Header';
import Slider from './components/Slider';

class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Slider />
      </div>
    );
  }
}

export default Homepage;
