//npm import
import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

//local import
import './index.css';
import rootReducer from './Reducers/rootReducer';
import Home from './Components/Templates/Home';

let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger
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
