import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './sass/Slider.scss';

import api from '../../../../config/api';

class Slider extends Component {
  state = {
    movieData: [],
    serieData: [],
    movieId: ['tt5093026', 'tt2017109'],
  };
  componentDidMount() {
    Promise.all([
      axios.get(
        `${api.baseURL}${api.key}&i=${this.state.movieId[0]}&plot=full`
      ),
      axios.get(
        `${api.baseURL}${api.key}&i=${this.state.movieId[1]}&plot=full`
      ),
    ]).then(([movieData, serieData]) => {
      this.setState({
        movieData: movieData.data,
        serieData: serieData.data,
        loaded: true,
      });
    });
  }

  render() {
    const { movieData, serieData } = this.state;
    return (
      <Carousel autoPlay className="slider">
        <Link to="/showlist">
          <div>
            <img src={movieData.Poster} alt={movieData.Title} />
            <p className="legend">{movieData.Title}</p>
          </div>
        </Link>

          <div>
            <img src={serieData.Poster} alt={serieData.Title} />
            <p className="legend">{serieData.Title}</p>
          </div>
      </Carousel>
    );
  }
}

export default Slider;
