import React from 'react';
import {useStyles} from 'routes/main/Events/Events.style';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h1>Home page</h1>
      </div>
    </div>
  );
};

export default Home;
