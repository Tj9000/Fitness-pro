import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import user from './user';
import login from './login';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  login,
  user
});

export default rootReducer;