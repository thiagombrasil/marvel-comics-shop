import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { ThemeProvider } from '@material-ui/styles';

import { useStyles, theme } from './styles.js';

import marvel from '../../assets/marvel.svg';

function ScrollTop(props) {
	const { children } = props;
	const classes = useStyles();

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    	if (anchor) {
      		anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    	}
	};

	return (
    <Zoom in={trigger}>
  		<div onClick={handleClick} role="presentation" className={classes.root}>
  			{children}
  		</div>
    </Zoom>
  );
}

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
		          	<div className={classes.search}>
			            <div className={classes.searchIcon}>
			              <SearchIcon />
			            </div>
			            <InputBase
			              placeholder="Pesquisar"
			              classes={{
			                root: classes.inputRoot,
			                input: classes.inputInput,
			              }}
			              inputProps={{ 'aria-label': 'search' }}
			            />
		          	</div>
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