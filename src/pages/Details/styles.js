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
    textAlign: 'center',
    heigth: 'auto',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('sm')]: {
      height: 500,
    },
  },
  cover: {
    display: 'flex',
    justifyContent: 'center',
    alignItens: 'center',
  },
  coverImg: {
    maxHeight: 500,
    [theme.breakpoints.down('xs')]: {
      maxHeight: 'none',
      width: '100%',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  	color: '#333',
    [theme.breakpoints.down('xs')]: {
      maxHeight: 'none',
    },
  },
  item: {
    flex: 1,
  },
  price: {
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
