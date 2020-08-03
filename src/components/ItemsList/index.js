import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Paper from '@material-ui/core/Paper';

import { useStyles } from './styles';
import * as comicsActions from '../../store/actions/comics';

function dataCreate(id, title, thumbnail, price, quantity) {
  return { id, title, thumbnail, price, quantity }
}

function ItemsList({comics, cleanComics}) {
  const classes = useStyles();
  const items = 
    comics.map(item => (
      dataCreate(item.id, item.title, item.thumbnail, item.price, item.quantity)
    ))

  return (
    <div>
    {items.map((item) => (
        <Paper className={classes.container}>
            <img src={item.thumbnail} alt="thumbnail" className={classes.thumbnail}/>
            <h4 className={classes.title}>{item.title}</h4>
            <div style={{display: 'flex'}}>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
              <div>
                <IconButton style={{color: '#388e3c'}} aria-label="add">
                  <AddIcon/>
                </IconButton>
                {item.quantity}
                <IconButton style={{color: '#f44336'}} aria-label="remove">
                  <RemoveIcon />
                </IconButton>
              </div>
            </div>
            <h4 className={classes.finalPrice}>{(item.price * item.quantity)}</h4>
        </Paper>
      ))}
      <button onClick={() => cleanComics()}>Limpar carrinho</button>
    </div>
  );
}

const mapStateToProps = state => ({
  comics: state.comics,
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(comicsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);