import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { useStyles } from './styles';
import CartItems from '../../components/CartItems';
import CartCalculation from '../../components/CartCalculation';

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

	return (
		<div>
			{props.cart.items.length === 0 ? 
				<NoItens /> :
				<div className={classes.container}>
					<CartItems />
					<CartCalculation />
				</div>
			}
		</div>
	)
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Checkout);