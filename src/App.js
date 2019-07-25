/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import Showlist from './components/Showlist';
import Favorites from './components/Favorites';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/showlist/:slug" component={Showlist} />
        <Route exact path="/showlist" component={Showlist} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
