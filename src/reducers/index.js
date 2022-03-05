import { combineReducers } from 'redux';
import userReducer from './userReducer';
import signinReducer from './signinReducer';

export default combineReducers({
  users: userReducer,
  signs: signinReducer
});
