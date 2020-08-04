import {defineState} from 'redux-localstore';

const defaultState = {
  items: [],
}

const initialState = defineState(defaultState)('cart')

export default function cart(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
    	return {items: [...state.items, action.item]}
    case 'CLEAN_CART':
    	return {items: []}
    case 'REMOVE_ITEM':
      return {items: state.items.filter((item) => item.id !== action.id)}
    case 'QTY_INCREMENT':
      return {items: state.items.map(item =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      )}
    case 'QTY_DECREMENT':
      return {items: state.items.map(item =>
        item.id === action.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )}
    default:
      return state;
  }
}