import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import LandingArea from './containers/LandingArea';
import Dashboard from './components/Dashboard'


export default (
    <Route path="/" component={App}>
      <Route path="home" component={LandingArea} />
    </Route>
);
