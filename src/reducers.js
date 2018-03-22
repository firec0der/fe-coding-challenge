// imports from vendors
import { combineReducers } from 'redux';

import orders from './modules/orders.js'

const testState = { foo: 'bar' };

export default combineReducers({
  orders,
  test: (state = testState) => state,
});
