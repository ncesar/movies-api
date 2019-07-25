/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Header from '../Header';

import { Grid, Paper, Button, Typography } from '@material-ui/core';

import './sass/Favorites.scss';

class Favorites extends Component {
  state = {
    showList: [],
  };

  loadFavorites = () => {
    const favoritesData = localStorage.getItem('showList');

    const showList = JSON.parse(favoritesData);
    this.setState({ showList: showList });
  };

  componentDidMount() {
    this.loadFavorites();
  }

  removeFavoritesHandler = index => {
    this.state.showList.splice(index, 1);
    localStorage.setItem('showList', JSON.stringify(this.state.showList));

    const favoritesData = localStorage.getItem('showList');
    const showList = JSON.parse(favoritesData);
    this.setState({ showList: showList });

    this.setState({ success: true });

    setTimeout(() => {
      this.setState({ success: false });
    }, 5000);
  };

  render() {
    const { showList } = this.state;
    console.log(showList);
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ paddingLeft: 100, paddingRight: 100 }}
        className="favorite-page"
      >
        <Header />
        <Grid item xs={12}>
          <Typography variant="h5" align="center" className="favorites-heading">
            Favorites Page
          </Typography>
        </Grid>
        <Paper className="favorite-list">
          <Grid container>
            {showList.length !== 0 ? (
              showList.map((name, index) => (
                <ul key={index}>
                  <li>
                    <Typography component="h4">Name: {name.Title}</Typography>
                  </li>
                  <li>
                    <Typography component="h4">
                      Description: {name.Plot.slice(0, 130)}...
                    </Typography>
                  </li>
                  <li>
                    <Typography component="h4">Time: {name.Runtime}</Typography>
                  </li>
                  <li>
                    <Typography component="h4">
                      Rating: {name.imdbRating}
                    </Typography>
                  </li>
                  <Button
                    variant="contained"
                    className="btn-favorite"
                    onClick={() => this.removeFavoritesHandler(index)}
                  >
                    Remove from favorite
                  </Button>
                  <div className="border" />
                </ul>
              ))
            ) : (
              <Typography component="h4" style={{ padding: 40 }}>
                No movies or series in favorites.
              </Typography>
            )}
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default Favorites;
