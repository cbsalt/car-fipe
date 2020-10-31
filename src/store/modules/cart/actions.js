export function addToCartRequest(data) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: { data },
  };
}

export function addToCartSuccess(data) {
  return {
    type: '@cart/ADD_SUCCESS',
    payload: { data },
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    payload: { id },
  };
}
