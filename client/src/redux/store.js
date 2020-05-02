import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import ThunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';

export const history = createBrowserHistory();

const withHistoryReducer = rootReducer(history);

const store = createStore(
  withHistoryReducer,
  applyMiddleware(
    routerMiddleware(history),
    ThunkMiddleware
  )
);

export default store;
