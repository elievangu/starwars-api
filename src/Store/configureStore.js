//npm import
import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//local import
import rootReducer from '../Reducers/rootReducer'

export const history = createBrowserHistory()

const configureStore = (preloadedState) => {
  let store = createStore(
    rootReducer(history),
    compose(
      composeWithDevTools(
        applyMiddleware(
          routerMiddleware(history),
          thunkMiddleware,
          logger
        )
      )
    )
  )
  return store
}

export default configureStore;