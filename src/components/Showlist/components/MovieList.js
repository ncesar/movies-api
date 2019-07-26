import React from 'react';
import axios from 'axios';

//material-ui
import { Grid, Button, Typography, Paper } from '@material-ui/core';

import './sass/List.scss';

import api from '../../../config/api';

class MovieList extends React.Component {
  state = {
    movieData: {},
    youtubeId: [],
    loaded: false,
    favoriteData: [],
    success: false,
  };
  componentDidMount() {
    axios
      .get(`${api.baseURL}${api.key}&i=${this.props.movieID}&plot=full`)
      .then(res => res.data)
      .then(res => {
        this.setState({ movieData: res });
      });
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.props.movieName} trailer&type=video&maxResults=1&key=${api.youtubeKey}`
      )
      .then(res => {
        this.setState({ youtubeId: res.data.items, loaded: true });
      });
    // axios
    //   .get(
    //       `https://www.googleapis.com/customsearch/v1?q=${Actors}`
    //   )
  }

  favoriteHandler = e => {
    e.preventDefault();
    let { movieData, favoriteData } = this.state;

    favoriteData.push(movieData);
    favoriteData = favoriteData.concat(
      JSON.parse(localStorage.getItem('showList') || '[]')
    );
    console.log('data local storage: ', favoriteData);

    localStorage.setItem('showList', JSON.stringify(favoriteData));

    this.setState({ success: true });

    setTimeout(() => {
      this.setState({ success: false });
    }, 5000);
  };

  render() {
    const {
      Title,
      Plot,
      Poster,
      imdbRating,
      Runtime,
      Actors,
      Ratings,
    } = this.state.movieData;
    if (!Poster || Poster === 'N/A') {
      return null;
    }
    return (
      <Paper className="movie-container">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <img src={Poster} alt="Movie poster" className="movie-image" />
          </Grid>
          <Grid item xs={12} md={8} className="infos">
            <Typography variant="h5" component="h3">
              About the movie
            </Typography>
            <Button
              variant="contained"
              className="btn-favorite"
              onClick={this.favoriteHandler}
            >
              Add as favorite
            </Button>
            {this.state.success === true ? (
              <div className="success-msg">
                Added to favorites with success!
              </div>
            ) : null}
            <div className="movie-info">
              <Typography component="h4">Name: {Title}</Typography>
              <Typography component="h4">Description: {Plot}</Typography>
              <Typography component="h4">Time: {Runtime}</Typography>
              <Typography component="h4">Rating: {imdbRating}</Typography>
              <Typography component="h4">Cast: {Actors}</Typography>
              <div className="trailer">
                <Typography component="h4">Trailer:</Typography>
                {this.state.loaded === true ? (
                  <div className="video-container">
                  <iframe
                    id="ytplayer"
                    type="text/html"
                    title={Title}
                    width="640"
                    height="360"
                    src={`https://www.youtube.com/embed/${this.state.youtubeId[0].id.videoId}?autoplay=0`}
                    frameBorder="0"
                  />
                  </div>
                ) : null}
              </div>
              <Typography component="h4">Top 3 reviews:</Typography>
              <ul className="reviews">
                {Ratings.map((review, index) => (
                  <li key={index}>
                    {review.Source} <br /> Value: {review.Value}
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default MovieList;
