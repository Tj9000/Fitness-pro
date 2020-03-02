import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';
import rootEpic from './epics';

export const history = createBrowserHistory()

const epicMiddleware = createEpicMiddleware();
epicMiddleware.run(rootEpic);

const store = createStore(
  rootReducer(history),
  applyMiddleware(
    routerMiddleware(history),
    epicMiddleware
  )
);

export default store;