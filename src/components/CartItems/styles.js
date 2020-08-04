import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
  	display: 'flex',
  	flexWrap: 'wrap',
  	justifyContent: 'center',
  	alignItems: 'center',
  	padding: 10,
  	margin: '10px 0'
  },
  thumbnail: {
  	height: 120,
  	marginRight: 10,
    border: '1px solid #f0f0f0',
  },
  title: {
    width: 300,
    textAlign: 'center',
  },
  options: {
    flexGrow: 2,
    justifyContent: 'center',
    display: 'flex'
  },
  itemTotal: {
    width: 200,
    textAlign: 'center'
  },
});