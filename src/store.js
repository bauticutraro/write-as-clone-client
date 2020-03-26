import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import createRootReducer from './reducers';

export const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [
  typeof window !== 'undefined' && window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
];
const middleware = [sagaMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default () => {
  let store = createStore(createRootReducer(), initialState, composedEnhancers);
  let persistor = persistStore(store);
  return { store, persistor };
};
