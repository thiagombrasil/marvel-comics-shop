import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 200,
    textDecoration: 'none',
  },
  price: {
    color: '#388e3c',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '70%',
  },
  cover: {
    width: 140,
    '&:hover':{
      transform: 'scale(1.1)',
      transition: '0.5s'
    }
  },
  rare: {
    color: '#f44336',
    border: '1px solid #ff9800',
  }
}));