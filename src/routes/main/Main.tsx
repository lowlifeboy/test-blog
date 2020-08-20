import React from 'react';
import MainLayout from './MainLayout/MainLayout';
import {Route} from 'react-router-dom';
import Events from 'routes/main/Events';
import Home from 'routes/main/Home';
import Profile from './Profile/Profile';

const Main: React.FC = () => {
  return (
    <MainLayout>
      <Route exact path={['/']} component={Home} />
      <Route path={['/events', '/events/:id']} component={Events} />
      <Route path="/profile" component={Profile} />
    </MainLayout>
  );
};

export default Main;
