import React from 'react';
import {useSelector} from 'react-redux';
import State from '../../../state/entities/State';
import {useRouterActions} from '../../../state/hooks/UseActions';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import {useStyles} from './Profile.style';

const Profile = () => {
  const classes = useStyles();

  const {user} = useSelector((state: State) => state.auth);

  const routerActions = useRouterActions();

  if (!user) {
    routerActions.navigateToLogin();
  }

  return (
    <div>
      {user && (
        <>
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`https://testdb-94b3.restdb.io/media/${user.image}?key=5f36d664dc407a17c590ace1`}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                  {user.name}
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                  {user.email}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user.phoneNumber}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </>
      )}
    </div>
  );
};

export default Profile;
