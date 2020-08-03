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
  	marginRight: 10
  },
  title: {
  	flexGrow: 1,
  	flexBasis: 158,
  },
  qtyButton: {
    flexGrow: 1,
    flexBasis: 100,
  },
  finalPrice: {
  	flexGrow: 1,
  	flexBasis: 100,
  	textAlign: 'center'
  },
});