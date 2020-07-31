import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { useStyles } from './styles';

export default function ScrollTop(props) {
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