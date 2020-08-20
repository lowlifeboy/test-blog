import {makeStyles} from '@material-ui/styles';
import {Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
  },
  card: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8),
    borderRadius: theme.spacing(2),
    boxShadow: '3px 3px 15px rgba(0,0,0,0.2)',
  },
  grid: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    height: '100%',
    display: 'flex',
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  form: {
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
  },
  fieldTitle: {
    ...theme.typography.h6,
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  signInButton: {
    margin: theme.spacing(1, 0),
  },
  errorMessage: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    ...theme.typography.subtitle2,
    color: theme.palette.error.light,
  },
}));
