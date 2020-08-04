export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    item,
  };
}

export function cleanCart() {
  return {
    type: 'CLEAN_CART',
  };
}

export function removeItem(id) {
	return {
	    type: 'REMOVE_ITEM',
	    id,
	};
}

export function qtyIncrement(id) {
  return {
      type: 'QTY_INCREMENT',
      id,
  };
}

export function qtyDecrement(id) {
  return {
      type: 'QTY_DECREMENT',
      id,
  };
}