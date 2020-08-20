import {makeStyles} from '@material-ui/styles';
import {Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
  loaderContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventItem: {
    backgroundColor: 'transparent !important',
  },
  event: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '200px auto',
    gridTemplateRows: 'auto',
    gridGap: 24,
    fontFamily: 'Roboto',
    backgroundColor: '#FFF',
    marginBottom: 0,
  },
  imageContainer: {
    padding: 20,

    '& > img': {
      width: 160,
    },
  },
  textContainer: {
    padding: 20,

    '& > h3': {
      ...theme.typography.h4,
      marginTop: 0,
      marginBottom: 15,
    },
  },
  description: {
    ...theme.typography.body1,
  },
  postBottomPart: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  date: {
    ...theme.typography.subtitle2,
    fontWeight: 'bold',
    marginTop: 15,
  },
  price: {
    ...theme.typography.subtitle1,
    fontWeight: 'bold',
    marginBottom: 15,
  },
}));
