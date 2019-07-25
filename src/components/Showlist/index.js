/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';

import api from '../../config/api';

import Header from '../Header';
import MovieList from './components/MovieList';

import './sass/Showlist.scss';

//material-ui
import { Grid, TextField, Button, Typography } from '@material-ui/core';


class Showlist extends Component {
  state = {
    moviesList: ['tt5093026'],
    searchTerm: 'papilon',
  };

  search = e => {
    e.preventDefault();
    axios
      .get(
        `${api.baseURL}${api.key}&s=${this.state.searchTerm}&plot=full`
      )
      .then(res => res.data)
      .then(res => {
        if (!res.Search) {
          this.setState({ moviesList: [] });
          return;
        }

        const moviesList = res.Search.map(movie => movie.imdbID);
        this.setState({
          moviesList,
        });
        console.log(moviesList);
      });
  };

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    const { moviesList } = this.state;

    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className="showlist"
      >
        <Header />
        <Grid item xs={12}>
          <form onSubmit={this.search} className="search-form">
            <TextField
              id="outlined-name"
              label="Search for a movie.."
              className="text-field"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="btn-primary"
            >
              Search
            </Button>
          </form>
        </Grid>
        {moviesList.length > 0 ? (
          moviesList.map(movie => (
            <MovieList
              movieID={movie}
              movieName={this.state.searchTerm}
              key={movie}
            />
          ))
        ) : (
          <Typography variant="body1">
            Couldn't find any movie. Please search again using another search
            criteria.
          </Typography>
        )}
      </Grid>
    );
  }
}

export default Showlist;
