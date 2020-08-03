export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    item
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
	    id
	};
}