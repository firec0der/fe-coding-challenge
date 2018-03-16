// imports from vendors
import { combineReducers } from 'redux';

const testState = { foo: 'bar' };

export default combineReducers({
  test: (state = testState) => state,
});
