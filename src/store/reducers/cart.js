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
    default:
      return state;
  }
}