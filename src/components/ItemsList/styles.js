import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root:{
		flexGrow: 1,
		marginTop: 10,
	},
  	table: {
    	minWidth: 650,
  	},
  	paper: {
  		display: 'flex',
	    padding: theme.spacing(2),
	    color: theme.palette.text.secondary,
	    minWidth: 360,
  	},
  	form: {
  		marginRight: 10,
  	},
  	container: {
	    maxWidth: 1120,
	    margin: '0 auto',
	    padding: 20,
	},
	total: {
		display: 'flex',
		textAlign: 'right',
	}
}));
