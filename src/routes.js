import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Profile from './pages/Profile';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Profile} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
