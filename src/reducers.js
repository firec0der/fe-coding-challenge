// imports from vendors
import { combineReducers } from 'redux';

import orders from './modules/orders.js'
import singleOrder from './modules/singleOrder.js'

const testState = { foo: 'bar' };

export default combineReducers({
  orders,
  singleOrder,
  test: (state = testState) => state,
});
