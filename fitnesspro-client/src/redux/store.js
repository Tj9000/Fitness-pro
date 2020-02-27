import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();
epicMiddleware.run(rootEpic);

 const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

export default store;