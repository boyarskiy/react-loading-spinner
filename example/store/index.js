import { createStore, applyMiddleware } from 'redux';
import apiMiddleware from '../middlewares/apiMiddleware';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}

