import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 200,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    textDecoration: 'none',
    color: '#333',
  },
  price: {
    position: 'absolute',
    bottom: 10,
    left: 16,
    color: '#388e3c',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 140,
  },
  rare: {
    color: '#b22a00',
  }
}));