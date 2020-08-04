import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Paper from '@material-ui/core/Paper';

import { useStyles } from './styles';
import * as cartActions from '../../store/actions/cart';

function itemTotal(price, qty) {
    const value = (price * qty).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return value
}

function ItemsList({cart, cleanCart, removeItem, qtyIncrement, qtyDecrement}) {
  const classes = useStyles();

  return (
    <div style={{width: '80%'}}>
    {cart.items.map((item, index) => (
        <Paper key={index} className={classes.container} >
            <img src={item.thumbnail} alt="thumbnail" className={classes.thumbnail}/>
            <h4 className={classes.title}>{item.title}</h4>
            <div className={classes.options}>
              <IconButton  aria-label="delete" onClick={() => removeItem(item.id)}>
                <DeleteIcon />
              </IconButton>
              <div>
                <IconButton aria-label="remove" onClick={() => qtyDecrement(item.id)}>
                  <RemoveIcon />
                </IconButton>
                {item.quantity}
                <IconButton aria-label="add" onClick={() => qtyIncrement(item.id)}>
                  <AddIcon/>
                </IconButton>
              </div>
            </div>
            <h4 className={classes.itemTotal}>{itemTotal(item.price, item.quantity)}</h4>
        </Paper>
      ))}
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <button onClick={() => cleanCart()}>Limpar carrinho</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(cartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);