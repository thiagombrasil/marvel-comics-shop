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
    maxWidth: 1120,
    marginTop: 200,
    display: 'flex',
  	alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'center',    
  },
}));