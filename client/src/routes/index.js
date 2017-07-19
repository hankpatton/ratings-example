import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { requireAuth } from './hooks'

// Layouts
import DefaultLayout from '../layouts/DefaultLayout';

// Routes
import Home from '../containers/HomeContainer';
import SignIn from '../forms/SignIn';
import NotFound from '../components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={DefaultLayout}>
      <IndexRoute onEnter={requireAuth()} component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
