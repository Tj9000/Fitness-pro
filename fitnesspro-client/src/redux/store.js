import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router'
import ThunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
import rootEpic from './epics';

export const history = createBrowserHistory()

// const epicMiddleware = createEpicMiddleware();
// epicMiddleware.run(rootEpic);

const store = createStore(
  rootReducer(history),
  applyMiddleware(
    routerMiddleware(history),
    ThunkMiddleware
  )
);

export default store;