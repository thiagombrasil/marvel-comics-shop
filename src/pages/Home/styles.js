import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    maxWidth: 1120,
    margin: '0 auto',
    paddingTop: 10,
    
  }
}));