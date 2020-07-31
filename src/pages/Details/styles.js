import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

export const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 1120,
    margin: '0 auto',
    padding: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('sm')]: {
      height: 370,
    },
  },
  cover: {
    maxHeight: 330,
    [theme.breakpoints.down('xs')]: {
      maxHeight: 'none',
      width: '100%',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  	textAlign: 'left',
  	color: '#333',
  },
  price: {
    flex: 1,
    marginTop: 20,
  	color: '#388e3c',
  },
  button: {
    marginTop: 10,
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(1),
      width: '100%',
    },
  },
}));
