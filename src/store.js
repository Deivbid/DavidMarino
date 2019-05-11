import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null
const initialState = {};
export const configureStore = () => {
 return createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk), devTools)
 );
}