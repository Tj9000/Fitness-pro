import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import user from './user';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user
});

export default rootReducer;