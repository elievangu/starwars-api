//npm import
import React from 'react';
import ReactDOM from 'react-dom';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import * as serviceWorker from './serviceWorker';

//local import
import rootReducer from './Reducers/rootReducer';
import '../src/index.css';
import Films from './Components/Templates/Films';
import People from './Components/Templates/People';
import Species from './Components/Templates/Species';
import Planets from './Components/Templates/Planets';
import Starships from './Components/Templates/Starships';
import Vehicles from './Components/Templates/Vehicles';
import Home from './Components/Templates/Home';

const history = createHistory()

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
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/films' component={Films}/>
          <Route path='/people' component={People}/>
          <Route path='/planets' component={Planets}/>
          <Route path='/species' component={Species}/>
          <Route path='/starships' component={Starships}/>
          <Route path='/vehicles' component={Vehicles}/>
        </Switch>  
      </Router>
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
