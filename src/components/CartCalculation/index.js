import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { useStyles } from './styles';

export default function CartCalculation() {
	const classes = useStyles();
	const items = useSelector(state => state.cart.items);
	let subTotal = 0;

	items.map(item => (
		subTotal = (subTotal + (item.price * item.quantity))
	))

	const totalFormated = subTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

	const handleSubmit = e => {
	    e.preventDefault();

  	};
	return (
		<div className={classes.root}>
			<Paper variant="outlined">
				<form noValidate autoComplete="off" onSubmit={handleSubmit} style={{display: 'flex'}}>
			      <TextField id="outlined-basic" label="Cupom" variant="outlined" />
			      <Button
		      		type="submit"
		      		variant="contained" 
		      		disableElevation 
		      		size="large"
		      		style={{marginLeft: 5}}
			      >
			      Aplicar
			      </Button>
			    </form>
			</Paper>
			<Paper variant="outlined">
				<div>
					<div className={classes.content}>
						<Typography variant="body2">Subtotal</Typography>
						<Typography variant="body2">
						{totalFormated}
						</Typography>
					</div>
					<Divider />
					<div className={classes.content}>
						<Typography variant="body2">Desconto Cupom</Typography>
						<Typography variant="body2">R$ 0,00</Typography>
					</div>
					<Divider />
					<div className={classes.content}>
						<Typography variant="h6">TOTAL</Typography>
						<Typography variant="subtitle2">{totalFormated}</Typography>
					</div>
				</div>
			</Paper>
		</div>
	)
}