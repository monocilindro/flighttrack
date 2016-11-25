import { createStore, combineReducers, compose } from 'redux';
import { responsiveStateReducer, responsiveStoreEnhancer } from 'redux-responsive';
import uiReducer from './reducers/ui';

const reducers = combineReducers({
  ui: uiReducer,
  browser: responsiveStateReducer,
});

export default function configureStore(initialState = {}) {
  const enhancer = compose(
    responsiveStoreEnhancer,
    (window.devToolsExtension && process.env.NODE_ENV !== 'production') ? window.devToolsExtension() : f => f,
  );
  return createStore(reducers, initialState, enhancer);
}
