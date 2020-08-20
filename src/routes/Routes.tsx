import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './main/Main';
import Auth from './auth/Auth';

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Auth} />
          <Route path={['/', '/events', '/events/:id', '/profile']} component={Main} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
