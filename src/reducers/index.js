import { combineReducers } from 'redux';
import userReducer from './userReducer';
import signinReducer from './signinReducer';
import passionReducer from './passionReducer'
import historyReducer from './historyReducer'

export default combineReducers({
  users: userReducer,
  signs: signinReducer,
  passions: passionReducer,
  historys: historyReducer

});
