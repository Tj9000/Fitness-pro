import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import user from './user';
import login from './login';
import signup from './signup';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  login,
  signup,
  user
});

export default rootReducer;