import {makeStyles} from '@material-ui/styles';
import {Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.main,
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
  },
  logoImage: {
    height: 55,
    marginRight: -15,
  },
  logoTitle: {
    marginTop: 3,
    height: 26,
    transform: 'rotateZ(1.7deg)',
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
  icon: {
    width: 24,
    height: 24,
  },
}));
