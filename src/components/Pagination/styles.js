import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    maxWidth: 1120,
    margin:  '0 auto',
    display: 'flex',
    paddingTop: 50,
    paddingBottom: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
}));