import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: '1120px',
    margin: '0 auto',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
}));