import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { ThemeProvider } from '@material-ui/styles';

import { useStyles, theme } from './styles.js';
import marvel from '../../assets/marvel.svg';
//import SearchInput from '../SearchInput';
import ScrollTop from '../ScrollTop';

export default function Header(props) {
	const classes = useStyles();

	return (
	    <React.Fragment>
	    	<CssBaseline />
	  		<ThemeProvider theme={theme}>
		    	<AppBar color="primary">
			        <Toolbar>				     
	            		<Link to="/" className={classes.title}>
	                  		<img src={marvel} alt="logo" className={classes.logo}></img>
	                	</Link>
			          	
			          	<IconButton component={Link} to={'/checkout'} aria-label="show 4 new mails" color="inherit">
			              <Badge color="secondary">
			                <ShoppingCartIcon />
			              </Badge>
			            </IconButton>
			        </Toolbar>
		    	</AppBar>
	      </ThemeProvider>
	      <Toolbar id="back-to-top-anchor" />
	      <ScrollTop {...props}>
	        <Fab color="secondary" size="small" aria-label="scroll back to top">
	          <KeyboardArrowUpIcon />
	        </Fab>
	      </ScrollTop>
	    </React.Fragment>
  );
}