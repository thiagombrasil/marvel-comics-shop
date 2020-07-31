import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

export default function ItensList() {
  const classes = useStyles();

  return (

  	<div className={classes.container}>
	    <TableContainer component={Paper}>
	      <Table className={classes.table} aria-label="simple table">
	        <TableHead>
	          <TableRow>
	            <TableCell align="center"></TableCell>
	            <TableCell align="center">Nome do produto</TableCell>
	            <TableCell align="center">Preço Unitário</TableCell>
	            <TableCell align="center">Quant.</TableCell>
	            <TableCell align="center">Subtotal</TableCell>
	          </TableRow>
	        </TableHead>
	        <TableBody>
	        	<TableRow>
	     			<TableCell align="right">Não há itens no carrinho</TableCell>
	     		</TableRow>
	        </TableBody>
	      </Table>
	    </TableContainer>

	    <div className={classes.root}>
      		<Grid container spacing={1}>
		        <Grid item xs={12} md={6}>
		          <Paper className={classes.paper} variant="outlined" elevation={1}>
		          	<form className={classes.form}noValidate autoComplete="off">
				      <TextField id="frete" label="Calcular frete" variant="outlined" />
				    </form>
				    <Button variant="contained" size="small" disableElevation>Calcular</Button>
		          </Paper>
		        </Grid>
		        <Grid item xs={12} md={6}>
		          <Paper className={classes.paper} variant="outlined" elevation={1}>
		          	<form className={classes.form} noValidate autoComplete="off">
				      <TextField id="cupom" label="Cupom" variant="outlined" />
				    </form>
				    <Button variant="contained" size="small" disableElevation>Aplicar</Button>
		          </Paper>
		        </Grid>
		        <Grid item xs={12}>
		          <Paper className={classes.paper} variant="outlined" elevation={1}>
		          	<Typography variant="h6" className={classes.total}>Total geral</Typography>
		          </Paper>
		        </Grid>
	      	</Grid>
    </div>
    </div>
  );
}