import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ItensList from '../../components/ItensList';
import { useStyles } from './styles';

function NoItens(){
	const classes = useStyles();

	return (
		<div>
			<h1>Não há Itens no Carrinho</h1>
			<p>Seu carrinho de compras está vazio</p>
			<p>Clique <Link className={classes.link} to="/">aqui</Link> para continuar as compras</p>
		</div>
	)
}

function Checkout(props){
	const classes = useStyles();

	console.log(props)

	return (
		<div className={classes.container}>
			{props.comics.length === 0 ? 
				<NoItens /> : <ItensList />
			}
		</div>
	)
}

const mapStateToProps = state => ({
  comics: state.comics,
});

export default connect(mapStateToProps)(Checkout);