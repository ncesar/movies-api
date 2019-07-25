import React from 'react';
import { Grid, Typography, ListItem, List } from '@material-ui/core';
import Header from '../Header';

import './sass/About.scss';

const About = () => {
  return (
    <Grid container align="center" justify="center" className="about-page">
      <Header />
      <Typography variant="h2">About the project</Typography>
      <div className="about-container">
        <Typography variant="body1">
          Everyone should use YBMs because its an little project made by an
          young student, with passion to learn and teach.
        </Typography>
        <Typography variant="body1">
          The project idea is simple, to help people organize their favorite
          movies and series.
          <br />I would say that my frontend skill is getting closer to Advanced
          each day, since im always trying to learn new things. You can access
          the web app documentation in:{' '}
          <a
            href="https://ncesar.github.io/docs/ybms"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ncesar.github.io/docs/ybms
          </a>
        </Typography>
        <Typography variant="body1">
          It was made using these technologies:
        </Typography>
        <List component="nav" aria-label="Secondary mailbox folders">
          <ListItem button>- ReactJS</ListItem>
          <ListItem button>- Axios</ListItem>
          <ListItem button>- React Router DOM</ListItem>
          <ListItem button>- ESLint(with Airbnb rules)</ListItem>
          <ListItem button>- SASS</ListItem>
          <ListItem button>- Material UI for styling</ListItem>
          <ListItem button>- OMDB API for listing movies and series</ListItem>
          <ListItem button>
            - Youtube API for searching movie/series trailers
          </ListItem>
          <ListItem button>- Docusauros for documentation</ListItem>
          <ListItem button>- Heroku for deployment</ListItem>
        </List>
      </div>
    </Grid>
  );
};

export default About;
