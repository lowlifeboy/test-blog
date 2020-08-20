import {makeStyles} from '@material-ui/styles';
import {Theme, colors} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'none',
    textDecoration: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
    ...theme.typography.h6,

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
  icon: {
    color: colors.blueGrey[800],
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  subIcon: {
    color: colors.blueGrey[800],
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  active: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon, $subIcon': {
      color: theme.palette.primary.main,
    },
  },
}));
