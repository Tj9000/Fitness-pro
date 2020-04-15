import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import ThunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';


import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
const expireReducer = require('redux-persist-expire');

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'training'],
  transforms: [
    expireReducer('user', {
      // (Optional) Key to be used for the time relative to which store is to be expired
      // persistedAtKey: '__persisted_at',
      expireSeconds: 5 * 60,
      autoExpire: true
    })
    // You can add more `expireReducer` calls here for different reducers
    // that you may want to expire
  ]
}

const withHistoryReducer = rootReducer(history);
const persistedReducer = persistReducer(persistConfig, withHistoryReducer);


const store = createStore(
  persistedReducer,
  applyMiddleware(
    routerMiddleware(history),
    ThunkMiddleware
  )
);

export default store;
export const persistor = persistStore(store);