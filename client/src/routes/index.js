import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { requireAuth, redirectSignin } from './hooks'

// Layouts
import DefaultLayout from '../layouts/DefaultLayout';

// Routes
import Home from '../components/Home';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import NotFound from '../components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={DefaultLayout}>
      <Route onEnter={redirectSignin()} path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route onEnter={requireAuth()}>
        <IndexRoute component={Home} />
        <Route path="*" component={NotFound} />
      </Route>
    </Route>
  </Router>
);

export default Routes;
