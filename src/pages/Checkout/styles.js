import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
	container: {
		maxWidth: 1120,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
    	margin: '0 auto',
    	padding: 20,	
	},
	link: {
		textDecoration: 'none',
		color: '#f44336',
	}
}));