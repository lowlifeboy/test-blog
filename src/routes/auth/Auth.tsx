import React from 'react';
import {Route} from 'react-router-dom';
import SignIn from 'routes/auth/SignIn';
import AuthLayout from './AuthLayout/AuthLayout';

const Auth: React.FC = () => {
  return (
    <AuthLayout>
      <Route path="/login" component={SignIn} />
    </AuthLayout>
  );
};

export default Auth;
