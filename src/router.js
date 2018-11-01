import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Page404 from './containers/Page404';

export default (
  <Route path="/" component={App}>
    <Route exact path="/" component={Home} />
    <Route path="404" component={Page404} />
    <Redirect from ="*" to ="404" />
  </Route>
);
