import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    width: '80%',
    margin: '15px 0',
    '& > *': {
      padding: 10,
      margin: '15px 0'
    }
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    '& > *': {
      width: 130,
    }
  },
});