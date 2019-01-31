//npm import
import React from 'react';
import ReactDOM from 'react-dom';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

//local import
import rootReducer from './Reducers/rootReducer';
import Home from './Components/Templates/Home';
import '../src/index.css';

export let store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  )
  
)

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
ReactDOM.render(
  <App />, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
