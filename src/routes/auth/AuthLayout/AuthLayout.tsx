import React from 'react';
import {useStyles} from 'routes/auth/AuthLayout/AuthLayout.style';
import CustomSnackBar from 'components/SnackBar/SnackBar';

const AuthLayout: React.FC = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CustomSnackBar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default AuthLayout;
