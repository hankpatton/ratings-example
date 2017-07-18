import React from 'react';
import { Router, Route } from 'react-router';

import DefaultLayout from '../layouts/DefaultLayout';

import Home from '../containers/HomeContainer';
import NotFound from '../components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route component={DefaultLayout}>
      <Route path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
