import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import user from './user';
import login from './login';
import modal from './modal';
import signup from './signup';
import trainer from './trainer';
import training from './training';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  login,
  modal,
  signup,
  user,
  trainer,
  training,
});

export default rootReducer;