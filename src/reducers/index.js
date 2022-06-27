import { combineReducers } from 'redux';
import userReducer from './userReducer';
import signinReducer from './signinReducer';
import passionReducer from './passionReducer'

export default combineReducers({
  users: userReducer,
  signs: signinReducer,
  passions: passionReducer
});
