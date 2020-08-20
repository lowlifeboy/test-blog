import {makeStyles} from '@material-ui/styles';
import {Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
  modalContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },
  modal: {
    backgroundColor: '#fff',
    flexBasis: 1000,
    margin: theme.spacing(3),
    outline: 0,
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1, 2),
    ...theme.typography.h5,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
  },
  modalWindowContent: {
    display: 'grid',
    gridTemplateColumns: '400px auto',
    gridTemplateRows: 'auto',
    gridGap: 24,

    '& > img': {
      width: '100%',
      margin: 20,
    },
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
