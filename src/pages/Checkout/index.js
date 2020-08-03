import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ItemsList from '../../components/ItemsList';
import { useStyles } from './styles';

function NoItens(){
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div>
			<h1>Não há Itens no Carrinho</h1>
			<p>Seu carrinho de compras está vazio</p>
			<p>Clique <Link className={classes.link} to="/">aqui</Link> para continuar as compras</p>
			</div>
		</div>
	)
}

function Checkout(props){
	const classes = useStyles();

	console.log(props)

	return (
		<div>
			{props.cart.items.length === 0 ? 
				<NoItens /> : <div className={classes.container}><ItemsList /></div>
			}
		</div>
	)
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Checkout);