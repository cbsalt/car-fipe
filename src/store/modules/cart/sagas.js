import { put, all, takeLatest } from 'redux-saga/effects';

import { addToCartSuccess } from './actions';

function* addToCart(action) {
  yield put(addToCartSuccess(action.payload.data));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);
